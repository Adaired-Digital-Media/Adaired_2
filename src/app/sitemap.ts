import { MetadataRoute } from 'next';
import { DateComponent } from '@core/utils/dateComponent';
import { BaseURL } from '@/baseUrl';

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
  _id: string;
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
  const siteUri = "https://adaired.com";
  const backendApiUri = BaseURL;

  if (!siteUri || !backendApiUri) {
    console.error('❌ Missing environment variables for sitemap generation');
    return [];
  }

  try {
    // ---------------------
    // Fetch APIs in parallel
    // ---------------------
    const [servicesRes, caseStudiesRes, blogsRes] = await Promise.all([
      fetch(`${backendApiUri}service`, { cache: 'no-store' }),
      fetch(`${backendApiUri}case-study`, { cache: 'no-store' }),
      fetch(`${backendApiUri}blog/get`, { cache: 'no-store' }),
    ]);
    // ---------------------
    // Parse safely
    // ---------------------
    const servicesJson: ApiResponse<Service> = servicesRes.ok
      ? await servicesRes.json()
      : { success: false, message: '', data: [] };

    const caseStudiesJson: ApiResponse<CaseStudy> = caseStudiesRes.ok
      ? await caseStudiesRes.json()
      : { success: false, message: '', data: [] };

    const blogsJson: ApiResponse<Blog> = blogsRes.ok
      ? await blogsRes.json()
      : { success: false, message: '', data: [] };

    const services = Array.isArray(servicesJson) ? servicesJson : [];

    const caseStudies = Array.isArray(caseStudiesJson.data)
      ? caseStudiesJson.data
      : [];

    const blogs = Array.isArray(blogsJson.data) ? blogsJson.data : [];

    // ---------------------
    // Dynamic paths
    // ---------------------
    const servicePaths: MetadataRoute.Sitemap = services
      .filter((service) => service.status === 'publish')
      .map((service) => ({
        url: `${siteUri}/services/${service.slug}`,
        lastModified:
          DateComponent(service.updatedAt) || new Date(service.updatedAt),
        changeFrequency: 'weekly',
        priority: manualPriorities[service.slug] ?? 0.9,
      }));

    const caseStudyPaths: MetadataRoute.Sitemap = caseStudies.map(
      (caseStudy) => ({
        url: `${siteUri}/case-studies/${caseStudy.slug}`,
        lastModified:
          DateComponent(caseStudy.updatedAt) || new Date(caseStudy.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.5,
      })
    );

    const blogPaths: MetadataRoute.Sitemap = blogs.map((blog) => ({
      url: `${siteUri}/blog/${blog.slug}`,
      lastModified: blog?.seo?.lastModified
        ? DateComponent(blog.seo.lastModified)
        : DateComponent(blog.updatedAt) || new Date(blog.updatedAt),
      changeFrequency: blog?.seo?.changeFrequency ?? 'weekly',
      priority: blog?.seo?.priority ?? 0.5,
    }));

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
        changeFrequency: 'weekly',
        priority: 1,
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
        priority: 0.5,
      },
      {
        url: `${siteUri}/blog`,
        lastModified: new Date('2024-06-24'),
        changeFrequency: 'weekly',
        priority: 0.65,
      },
      {
        url: `${siteUri}/contact`,
        lastModified: new Date('2024-06-24'),
        changeFrequency: 'weekly',
        priority: 0.5,
      },



      // SERVICES


      // =========================
      // SEO
      // =========================
      {
        url: `${siteUri}/services/seo-company-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/saas-seo-agency`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/ecommerce-seo-agency-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },


      // =========================
      // AI SEO
      // =========================
      {
        url: `${siteUri}/services/ai-seo-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/llm-seo-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/generative-engine-optimization-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/answer-engine-optimization-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },


      // =========================
      // LOCAL SEO
      // =========================
      {
        url: `${siteUri}/services/local-seo-company-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/gmb-optimization-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/gmb-website-seo-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },


      // =========================
      // LINK BUILDING
      // =========================
      {
        url: `${siteUri}/services/link-building-agency-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },


      // =========================
      // PAY PER CLICK
      // =========================
      {
        url: `${siteUri}/services/ppc-management-company-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },


      // =========================
      // WEB DESIGN & DEVELOPMENT
      // =========================
      {
        url: `${siteUri}/services/web-design-development-company`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/wordpress-development-company-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/shopify-development-company-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/ecommerce-development-company-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/custom-web-development-company`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },


      // =========================
      // MOBILE APP DEVELOPMENT
      // =========================
      {
        url: `${siteUri}/services/mobile-apps-development-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },


      // =========================
      // WHITE LABEL
      // =========================

      {
        url: `${siteUri}/services/white-label-agency-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/seo-outsourcing-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/social-media-outsourcing-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/white-label-paid-ads-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/white-label-link-building-india`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },




      // Main Categories
      {
        url: `${siteUri}/services/strategic-social-media-management`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/digital-creative-and-logo-design`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/expert-content-solutions`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },


      // Seo
      {
        url: `${siteUri}/services/technical-seo-analysis`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/online-reputation-management`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/competitor-backlink-outreach`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/guest-post-outreach`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/on-page-and-off-page-optimization`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/seo-company-usa`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },


      // Social Media
      {
        url: `${siteUri}/services/social-media-optimization`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/social-media-marketing`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },


      // Web design development
      {
        url: `${siteUri}/services/woocommerce`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/php-development`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/laravel-development`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${siteUri}/services/web-development-company-usa`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
    ];

    // ---------------------
    // Final sitemap
    // ---------------------
    return [...staticPaths, ...servicePaths, ...caseStudyPaths, ...blogPaths];
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    return [];
  }
}
