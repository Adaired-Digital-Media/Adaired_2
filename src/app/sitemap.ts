import { MetadataRoute } from 'next';
import { BaseURL } from '@/baseUrl';

export const revalidate = 3600; // Re-generate every 1 hour

// =====================
// Types
// =====================
interface Service {
  slug: string;
  updatedAt: string;
  status: string;
}

interface CaseStudy {
  slug: string;
  updatedAt: string;
}

interface Blog {
  slug: string;
  updatedAt: string;
  status: string;
  seo?: {
    lastModified?: string;
    changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority?: number;
  };
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T[];
}

// =====================
// Manual priority mapping
// =====================
const manualPriorities: Record<string, number> = {
  'digital-marketing-company-usa': 1,
  'web-development-company-usa': 1,
  'seo-company-usa': 1,
  'digital-marketing-company-india': 1,
};

// =====================
// Sitemap
// =====================
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUri = process.env.NEXT_PUBLIC_SITE_URI || 'https://adaired.com';

  const backendApiUri = BaseURL;

  if (!backendApiUri) {
    console.error('❌ Missing backend API URL for sitemap');
    return [];
  }

  try {
    // ---------------------
    // Fetch APIs in parallel
    // ---------------------
    const [servicesRes, caseStudiesRes, blogsRes] = await Promise.all([
      fetch(`${backendApiUri}/service/getServices`),
      fetch(`${backendApiUri}/case-study/read`),
      fetch(`${backendApiUri}/blog/read?status=publish`),
    ]);

    const servicesJson: ApiResponse<Service> = servicesRes.ok
      ? await servicesRes.json()
      : { success: false, message: '', data: [] };

    const caseStudiesJson: ApiResponse<CaseStudy> = caseStudiesRes.ok
      ? await caseStudiesRes.json()
      : { success: false, message: '', data: [] };

    const blogsJson: ApiResponse<Blog> = blogsRes.ok
      ? await blogsRes.json()
      : { success: false, message: '', data: [] };

    const services = Array.isArray(servicesJson.data) ? servicesJson.data : [];

    const caseStudies = Array.isArray(caseStudiesJson.data)
      ? caseStudiesJson.data
      : [];

    const blogs = Array.isArray(blogsJson.data) ? blogsJson.data : [];

    // ---------------------
    // Dynamic Services
    // ---------------------
    const servicePaths: MetadataRoute.Sitemap = services
      .filter((service) => service.status === 'publish')
      .map((service) => ({
        url: `${siteUri}/services/${service.slug}`,
        lastModified: new Date(service.updatedAt),
        changeFrequency: 'weekly',
        priority: manualPriorities[service.slug] ?? 0.8,
      }));

    // ---------------------
    // Dynamic Case Studies
    // ---------------------
    const caseStudyPaths: MetadataRoute.Sitemap = caseStudies.map(
      (caseStudy) => ({
        url: `${siteUri}/case-studies/${caseStudy.slug}`,
        lastModified: new Date(caseStudy.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.5,
      })
    );

    // ---------------------
    // Dynamic Blogs
    // ---------------------
    const blogPaths: MetadataRoute.Sitemap = blogs.map((blog) => ({
      url: `${siteUri}/blog/${blog.slug}`,
      lastModified: blog?.seo?.lastModified
        ? new Date(blog.seo.lastModified)
        : new Date(blog.updatedAt),
      changeFrequency: blog?.seo?.changeFrequency ?? 'weekly',
      priority: blog?.seo?.priority ?? 0.6,
    }));

    // ---------------------
    // Static Pages
    // ---------------------
    const staticPaths: MetadataRoute.Sitemap = [
      {
        url: `${siteUri}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${siteUri}/about`,
        lastModified: new Date('2024-06-24'),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/career`,
        lastModified: new Date('2024-06-24'),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${siteUri}/case-studies`,
        lastModified: new Date('2024-06-24'),
        changeFrequency: 'weekly',
        priority: 0.6,
      },
      {
        url: `${siteUri}/blog`,
        lastModified: new Date('2024-06-24'),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${siteUri}/contact`,
        lastModified: new Date('2024-06-24'),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
    ];

    // ---------------------
    // Final Sitemap
    // ---------------------
    return [...staticPaths, ...servicePaths, ...caseStudyPaths, ...blogPaths];
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    return [];
  }
}
