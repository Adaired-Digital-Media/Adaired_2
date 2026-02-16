'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

const BookAConsultation = ({ buildlinks }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);
  return (
    <div>
      {buildlinks?.isVariant === '01' && (
        <div
          className={`${buildlinks?.isBgWhite ? 'bg-gradient-to-b from-black to-[#051C40]' : 'bg-[#FFFCF8]'} py-[3rem] lg:py-[2rem]`}
        >
          <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
            <div
              className={`order-2 my-auto flex flex-col items-center transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <Heading
                className="flex justify-center lg:justify-start"
                subTitle={''}
                breakIndex={5}
                isH1={true}
                title={buildlinks?.heading}
                span={buildlinks?.span}
                spanColor="text-[#FBD04F]"
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
                  className="mt-[1rem]"
                />
              )}
            </div>

            <div
              ref={ref}
              className={`group order-1 flex justify-center justify-items-center p-10 transition-all duration-1000 lg:order-2 lg:justify-end lg:justify-items-end ${isVisible ? 'translate-x-0 opacity-100 lg:translate-x-16' : '-translate-x-0 opacity-0'} ${buildlinks?.isCode02 ? 'items-end' : 'items-center'}`}
            >
              <Image
                src={buildlinks?.img}
                width={479}
                height={399}
                className="transition-transform duration-300 ease-out group-hover:scale-110"
                alt=""
              />
            </div>
          </MaxWidthWrapper>
          <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      )}
      {buildlinks?.isVariant === '02' && (
        <div
          className={`${buildlinks?.isBgWhite ? 'bg-gradient-to-b from-black to-[#051C40]' : 'bg-[#FFFCF8]'}`}
        >
          <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] py-[3rem] lg:grid-cols-2 lg:py-0">
            <div
              className={`order-2 my-auto flex flex-col items-center transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <Heading
                className="flex justify-center lg:justify-start"
                subTitle={''}
                breakIndex={5}
                isH1={true}
                title={buildlinks?.heading}
                span={buildlinks?.span}
                spanColor="text-[#FBD04F]"
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
                  className="mt-[1rem]"
                />
              )}
            </div>

            <div
              ref={ref}
              className={`flex justify-center justify-items-center transition-all duration-1000 lg:order-2 lg:justify-end lg:justify-items-end`}
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
      )}
    </div>
  );
};

export default BookAConsultation;
