'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import { SERVICES_DATA } from './data';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import what_are_ai_seo from '../../../../../../public/assets/images/what_are_ai_seo.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';
const WhatAreAISEO = ({ whatareaiseo }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${whatareaiseo?.isBgWhite ? 'bg-gradient-to-b from-black to-[#051C40]' : 'bg-[#FFFCF8]'}`}
    >
      <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
        <div
          className={`order-2 my-auto flex flex-col items-center transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            subTitle={''}
            title={whatareaiseo?.heading}
            isBgWhite={whatareaiseo?.isBgWhite && true}
          />
          <div>
            {whatareaiseo?.data?.map((item: any) => {
              return (
                <p
                  className={`py-3 ${whatareaiseo?.isBgWhite && 'text-[#FFFFFF]'} `}
                >
                  {item?.desctioption}
                </p>
              );
            })}
          </div>

          {whatareaiseo?.isBgWhite && (
            <SaveAndCancel
              name={whatareaiseo?.button}
              isIcon={true}
              isBgWhite={true}
              handleClick={() => setOpen(!open)}
              className="mt-[1rem] w-[19rem]"
            />
          )}
        </div>
        <div
          ref={ref}
          className={`order-1 flex justify-center justify-items-center transition-all duration-1000 lg:order-2 lg:justify-end lg:justify-items-end ${isVisible ? 'translate-x-0 opacity-100 lg:translate-x-16' : '-translate-x-0 opacity-0'}`}
        >
          <Image
            src={whatareaiseo?.img}
            width={602}
            height={50}
            className=""
            alt=""
          />
        </div>
      </MaxWidthWrapper>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default WhatAreAISEO;
