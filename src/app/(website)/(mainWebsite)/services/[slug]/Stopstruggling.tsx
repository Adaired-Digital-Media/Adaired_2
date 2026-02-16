'use client';
import Heading from '@/app/(website)/common/Heading';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import NotSeeingResultsBg from '../../../../../../public/assets/aiseo/stop-struggle.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

const Stopstruggling = ({ stopStruggling }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center bg-cover bg-center bg-no-repeat py-[3rem] lg:py-[4rem]"
      style={{
        backgroundImage: `url(${stopStruggling?.bgImg?.src})`,
      }}
    >
      <MaxWidthWrapper className="flex justify-center">
        <div
          className={`mx-auto w-fit text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <h2 className="mx-auto w-[100%] text-center font-semibold text-[#FFFFFF] lg:w-[70%]">
            {stopStruggling?.title}
          </h2>

          <p className="text-center text-[#FFFFFF] whitespace-pre-line">
            {stopStruggling?.description}
          </p>

          <div className="mt-[2rem] flex justify-center">
            <SaveAndCancel
              name={stopStruggling?.button}
              isBgWhite={true}
              isIcon={true}
              isHoverBgBlue={stopStruggling?.isHoverBgBlue && true}
              handleClick={() => setOpen(!open)}
              buttonWidth="!w-[19rem]"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Stopstruggling;
