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
        <WebsiteLayout>{children}</WebsiteLayout>
        <div className="fixed bottom-2 left-3 z-40 cursor-pointer">
          <Link href="https://wa.me/918907300008" target="_blank">
            <Image
              src={whatsApp}
              width={55}
              height={55}
              alt="WhatsApp"
              className="h-[2.8rem] w-[2.8rem] md:h-[3.2rem] md:w-[3.2rem] lg:h-[3.438rem] lg:w-[3.438rem]"
            />
          </Link>
        </div>
      </SessionProvider>
    </div>
  );
}
