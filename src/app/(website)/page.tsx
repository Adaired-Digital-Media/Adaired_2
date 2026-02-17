import type { Metadata } from 'next';
import Home from './(mainWebsite)/home/Home';

export const metadata: Metadata = {
  title: 'Leading Digital Marketing Agency in India - Adaired Digital',
  description:
    "Adaired Digital Media is a results-driven digital marketing agency offering SEO, PPC, social media, and web marketing services to grow your business.",
  alternates: {
    canonical: 'https://www.adaired.com',
  },
};

export default function HomePage() {
  return <Home />;
}
