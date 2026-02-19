import type { Metadata } from 'next';
import Home from './(mainWebsite)/home/Home';

export const metadata: Metadata = {
  title: 'Leading Digital Marketing Agency in India - Adaired Digital',
  description:
    "Adaired helps brands attract traffic, capture leads, and grow faster with AI-driven SEO strategies, paid ads, social media, and conversion-ready websites.",
  alternates: {
    canonical: 'https://www.adaired.com',
  },
};

export default function HomePage() {
  return <Home />;
}
