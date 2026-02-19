import type { Metadata } from 'next';
import { SERVICES_DATA } from './data';
import StaticServicePage from './StaticServicePage';
import ApiServicePage from './ApiServicePage';

type ServiceSlug = keyof typeof SERVICES_DATA;

interface Props {
  params: {
    slug: string;
  };
}

/* ===============================
   ✅ Dynamic Metadata Function
================================= */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  // CASE 1: Static JSON service
  if (slug in SERVICES_DATA) {
    const serviceData = SERVICES_DATA[slug as ServiceSlug];

    return {
      title: serviceData?.metaDetails?.title,
      description: serviceData?.metaDetails?.description,
      alternates: {
        canonical: `https://www.adaired.com${serviceData?.metaDetails?.alternates?.canonical}`,
      },
    };
  }

  // CASE 2: API service fallback
  return {
    title: 'Service - Adaired Digital',
    description:
      'Explore our professional digital marketing services designed to grow your business.',
  };
}

/* ===============================
   Page Component
================================= */
const ServicePage = async ({ params }: Props) => {
  const { slug } = params;

  if (slug in SERVICES_DATA) {
    const serviceData = SERVICES_DATA[slug as ServiceSlug];
    return <StaticServicePage serviceData={serviceData} />;
  }

  return <ApiServicePage slug={slug} />;
};

export default ServicePage;
