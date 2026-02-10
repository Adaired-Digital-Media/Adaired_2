'use client';
import Heading from '@/app/(website)/common/Heading';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import NotSeeingResultsBg from '../../../../../../public/assets/NotSeeingResultsBg.png';
import NotSeeingResult from '../../../../../../public/assets/aiseo/NotSeeingResults.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

const NotSeeingResults = ({ notSeeingResult }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex items-center bg-cover bg-center bg-no-repeat bg-blue-950"
      style={{
        backgroundImage: `url(${notSeeingResult?.bgImage.src})`,
      }}
    >
      <MaxWidthWrapper className="grid w-full grid-cols-1 gap-[2rem] p-3 lg:grid-cols-2">
        <div
          className={` text-center lg:text-left flex flex-col items-center lg:items-start my-auto transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            isBgWhite={true}
            isH1={true}
            title={notSeeingResult?.heading}
            description={notSeeingResult?.description}
          />
          <SaveAndCancel
            name={notSeeingResult?.buttonName}
            isBgWhite={true}
            isIcon={true}
            handleClick={() => setOpen(!open)}
            className="w-[20rem] pt-[2rem]"
          />
        </div>

        <div
          ref={ref}
          className={`flex lg:justify-end lg:justify-items-end justify-center justify-items-center pt-2 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
        >
          <Image src={notSeeingResult?.img} alt="img" />
        </div>
        <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
      </MaxWidthWrapper>
    </div>
  );
};

export default NotSeeingResults;
