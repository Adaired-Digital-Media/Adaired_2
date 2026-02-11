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
          <h2 className="mx-auto w-[70%] text-center text-[35px] font-semibold text-[#FFFFFF]">
            {stopStruggling?.title}
          </h2>

          <p className="text-[#FFFFFF] text-center">{stopStruggling?.description}</p>

          <SaveAndCancel
            name={stopStruggling?.button}
            isBgWhite={true}
            isIcon={true}
            handleClick={() => setOpen(!open)}
            className="mx-auto mt-[2rem] lg:w-[23rem] w-[19rem]"
          />
        </div>
      </MaxWidthWrapper>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Stopstruggling;
