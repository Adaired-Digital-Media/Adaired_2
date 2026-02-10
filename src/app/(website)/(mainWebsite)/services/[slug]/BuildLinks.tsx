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
const BuildLinks = ({ buildlinks }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${buildlinks?.isBgWhite ? 'bg-gradient-to-b from-black to-[#051C40]' : 'bg-[#FFFCF8]'}`}
    >
      <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
        <div
          className={`order-2 my-auto flex flex-col items-center transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading className='flex justify-center lg:justify-start'
            subTitle={''}
            breakIndex={5}
            isH1={true}
            title={buildlinks?.heading}
            span={buildlinks?.span}
            isBgWhite={buildlinks?.isBgWhite && true}
          />
          <div>
            {buildlinks?.data?.map((item: any) => {
              return (
                <p
                  className={`py-3 ${buildlinks?.isBgWhite && 'text-[#FFFFFF]'} `}
                >
                  {item?.desctioption}
                </p>
              );
            })}
          </div>

          {buildlinks?.isBgWhite && (
            <SaveAndCancel
              name={buildlinks?.button}
              isIcon={true}
              isBgWhite={true}
              handleClick={() => setOpen(!open)}
              className="mt-[1rem] w-[19rem]"
            />
          )}
        </div>

        <div
          ref={ref}
          className={`order-1 flex justify-center justify-items-center transition-all duration-1000 p-10 lg:order-2 lg:justify-end lg:justify-items-end ${isVisible ? 'translate-x-0 opacity-100 lg:translate-x-16' : '-translate-x-0 opacity-0'}`}
        >
          <Image
            src={buildlinks?.img}
            width={479}
            height={399}
            className=""
            alt=""
          />
        </div>
      </MaxWidthWrapper>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default BuildLinks;