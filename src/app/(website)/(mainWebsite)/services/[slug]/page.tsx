import { SERVICES_DATA } from './data';
import StaticServicePage from './StaticServicePage';
import ApiServicePage from './ApiServicePage';

type ServiceSlug = keyof typeof SERVICES_DATA;

interface Props {
  params: {
    slug: string;
  };
}

const ServicePage = async ({ params }: Props) => {
  const { slug } = params;

  // CASE 1: Static JSON services
  if (slug in SERVICES_DATA) {
    const serviceData = SERVICES_DATA[slug as ServiceSlug];
    return <StaticServicePage serviceData={serviceData} />;
  }

  // CASE 2: API services
  return <ApiServicePage slug={slug} />;
};

export default ServicePage;
