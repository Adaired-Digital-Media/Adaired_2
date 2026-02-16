'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import { SERVICES_DATA } from './data';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import what_are_ai_seo from '../../../../../../public/assets/images/Development_Services.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';
import { BiSolidBadgeCheck } from 'react-icons/bi';

const WhatAreService = ({ whatareaiseo }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  const isCode01 = whatareaiseo?.code === '02';

  return (
    <div>
      {whatareaiseo?.isVariant === '01' && (
        <div
          className={`${whatareaiseo?.isBgWhite ? 'bg-gradient-to-b from-black to-[#051C40]' : 'bg-[#FFFCF8] py-[3rem] lg:py-[4rem]'}`}
        >
          <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
            <div
              className={`order-2 my-auto flex flex-col items-center transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <Heading
                className="flex justify-center lg:justify-start"
                subTitle={''}
                title={whatareaiseo?.heading}
                span={whatareaiseo?.span}
                spanColor="text-[#FBD04F]"
                isBgWhite={whatareaiseo?.isBgWhite && true}
              />
              <div className="">
                {whatareaiseo?.data?.map((item: any) => {
                  return (
                    <p
                      className={`py-2 text-center lg:text-justify ${whatareaiseo?.isBgWhite && 'text-[#FFFFFF]'} `}
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
                  className="my-[2rem]"
                />
              )}
            </div>

            <div
              ref={ref}
              className={`group order-1 flex items-center justify-center transition-all duration-1000 lg:order-2 lg:items-start lg:justify-end ${isVisible ? 'translate-x-0 opacity-100 lg:translate-x-16' : '-translate-x-0 opacity-0'}`}
            >
              <Image src={whatareaiseo?.img} width={602} height={50} alt="" />
            </div>
          </MaxWidthWrapper>
          <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      )}
      {whatareaiseo?.isVariant === '02' && (
        <div
          className={`${whatareaiseo?.isBgWhite ? 'bg-gradient-to-b from-black to-[#051C40]' : 'bg-[#FFFCF8]'}`}
        >
          <MaxWidthWrapper className="relative grid grid-cols-1 gap-[1rem] py-[3rem] lg:grid-cols-2 lg:gap-[8rem] lg:py-[4rem]">
            <div
              className={`order-2 my-auto flex flex-col items-center transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <Heading
                className="flex justify-center lg:justify-start"
                subTitle={''}
                title={whatareaiseo?.heading}
                span={whatareaiseo?.span}
                spanColor="text-[#FBD04F]"
                isBgWhite={whatareaiseo?.isBgWhite && true}
              />
              <div className="">
                {whatareaiseo?.data?.map((item: any) => {
                  return (
                    <p
                      className={`py-2 text-center lg:text-justify ${whatareaiseo?.isBgWhite && 'text-[#FFFFFF]'} `}
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
                  className="my-[2rem]"
                />
              )}
            </div>

            <div
              ref={ref}
              className={`flex items-center justify-center transition-all duration-1000 lg:absolute lg:bottom-0 lg:right-0 lg:order-2 lg:items-start lg:justify-end`}
            >
              <Image
                src={whatareaiseo?.img}
                width={669}
                height={564}
                className={`h-auto w-[clamp(18rem,40vw,42rem)] transition-transform duration-300 ease-out group-hover:scale-110`}
                alt=""
              />
            </div>
          </MaxWidthWrapper>
          <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      )}
      {whatareaiseo?.isVariant === '03' && (
        <div
          className={`${whatareaiseo?.isBgWhite ? 'bg-gradient-to-b from-black to-[#051C40]' : 'bg-[#FFFCF8] py-[3rem] lg:py-[4rem]'}`}
        >
          <MaxWidthWrapper className="relative grid grid-cols-1 gap-[1rem] lg:grid-cols-2 lg:gap-[4rem]">
            <div
              className={`order-2 my-auto flex flex-col items-center py-[4rem] transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <Heading
                className="flex justify-center lg:justify-start"
                subTitle={''}
                title={whatareaiseo?.heading}
                span={whatareaiseo?.span}
                spanColor="text-[#FBD04F]"
                isBgWhite={whatareaiseo?.isBgWhite && true}
              />
              <div className="">
                {whatareaiseo?.data?.map((item: any) => {
                  return (
                    <p
                      className={`py-2 text-center lg:text-justify ${whatareaiseo?.isBgWhite && 'text-[#FFFFFF]'} `}
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
                  className="my-[2rem]"
                />
              )}
            </div>
            <div
              ref={ref}
              className={`right-0 top-0 flex -translate-y-0 justify-center transition-all duration-1000 lg:absolute lg:right-[-5%] lg:top-1/2 lg:flex lg:-translate-y-1/2 lg:justify-end ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-12 opacity-0'
              }`}
            >
              <Image
                src={whatareaiseo?.img}
                width={828}
                height={762}
                alt=""
                className="h-auto w-[clamp(24rem,50vw,51.75rem)] object-contain"
              />
            </div>
          </MaxWidthWrapper>
          <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      )}
      {whatareaiseo?.isVariant === '04' && (
        <div
          className={`${whatareaiseo?.isBgWhite ? 'bg-gradient-to-b from-black to-[#051C40]' : 'bg-[#FFFCF8] py-[3rem] lg:py-[4rem]'}`}
        >
          <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
            <div
              className={`order-2 my-auto flex flex-col items-center transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <Heading
                className="flex justify-center lg:justify-start"
                subTitle={''}
                title={whatareaiseo?.heading}
                span={whatareaiseo?.span}
                spanColor="text-[#FBD04F]"
                isBgWhite={whatareaiseo?.isBgWhite && true}
              />
              <div className="">
                {whatareaiseo?.data?.map((item: any, index: number) => {
                  return (
                    <div key={index} className="space-y-4">
                      <p
                        className={`py-2 text-center lg:text-justify ${
                          whatareaiseo?.isBgWhite && 'text-[#FFFFFF]'
                        }`}
                      >
                        {item?.desctioption}
                      </p>

                      <div className="grid w-fit grid-cols-1 pb-4 md:grid-cols-2">
                        {item?.list?.map((listItem: any, listIndex: number) => (
                          <div
                            key={listIndex}
                            className="flex items-start gap-2 py-1"
                          >
                            <BiSolidBadgeCheck
                              size={25}
                              className="text-[#FB9100]"
                            />
                            {listItem?.description?.map(
                              (desc: string, descIndex: number) => (
                                <p
                                  key={descIndex}
                                  className={`my-auto text-left ${
                                    whatareaiseo?.isBgWhite && 'text-[#FFFFFF]'
                                  }`}
                                >
                                  {desc}
                                </p>
                              )
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* {whatareaiseo?.isBgWhite && (
                <SaveAndCancel
                  name={whatareaiseo?.button}
                  isIcon={true}
                  isBgWhite={true}
                  handleClick={() => setOpen(!open)}
                  className="my-[2rem] w-[16rem]"
                />
              )} */}
            </div>

            <div
              ref={ref}
              className={`group order-1 flex items-center justify-center transition-all duration-1000 lg:order-2 lg:items-start lg:justify-end ${isVisible ? 'translate-x-0 opacity-100 lg:translate-x-16' : '-translate-x-0 opacity-0'}`}
            >
              <Image src={whatareaiseo?.img} width={602} height={50} alt="" />
            </div>
          </MaxWidthWrapper>
          <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default WhatAreService;
