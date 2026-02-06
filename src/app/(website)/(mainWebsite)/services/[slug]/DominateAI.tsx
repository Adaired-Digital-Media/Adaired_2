'use client';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import background from '../../../../../../public/assets/aiseo/DominateAI.png';
// import { StaticImageData } from "next/image";
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Heading from '@/app/(website)/common/Heading';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import { useState } from 'react';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

export type page = {
  image: string;
};

const DominateAI = ({ getplan }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative flex h-[30rem] items-center py-[3rem]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      />

      <MaxWidthWrapper className="relative z-10 w-full">
        <div
          className={`space-y-5 text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <Heading
            isLabel={getplan?.isLabel && true}
            breakIndex={5}
            isH1={true}
            subTitle={getplan?.subtitle}
            title={getplan?.title}
            description={getplan?.description}
            isInCenter={true}
          />

          <div className="flex justify-center">
            <SaveAndCancel
              name="Get Your AI SEO Plan"
              isIcon={true}
              isBgWhite={true}
              handleClick={() => setOpen(!open)}
              className="flex w-[17rem]"
            />
          </div>
        </div>
      </MaxWidthWrapper>

      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default DominateAI;
