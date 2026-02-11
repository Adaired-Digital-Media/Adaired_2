import WebsiteLayout from '@/layouts/website/layout';
import { SessionProvider } from 'next-auth/react';
import { ReactLenis } from '@core/utils/lenis';
import whatsApp from '../../../public/assets/icons/whatsapp.png';
import Image from 'next/image';
import Link from 'next/link';
export default function DefaulWebsitetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <SessionProvider>
        <WebsiteLayout>
          <ReactLenis root>{children}</ReactLenis>
        </WebsiteLayout>
        <div className="fixed bottom-2 left-3 z-40 cursor-pointer">
          {/* <Link href="https://wa.me/+91-8907300008" target="_blank">
            <Image src={whatsApp} width={55} height={55} alt="WhatsApp" />
          </Link> */}
          {/* <Link
            href="https://wa.me/918907300008"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={whatsApp} width={55} height={55} alt="WhatsApp" />
          </Link> */}
          {/* <Link
            href="https://api.whatsapp.com/send?phone=918907300008"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={whatsApp} width={55} height={55} alt="WhatsApp" />
          </Link> */}
          {/* <a
            href="https://wa.me/918907300008"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={whatsApp} width={55} height={55} alt="WhatsApp" />
          </a> */}
          <a
            href="https://wa.me/918907300008"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={whatsApp} width={55} height={55} alt="WhatsApp" />
          </a>
        </div>
      </SessionProvider>
    </div>
  );
}
