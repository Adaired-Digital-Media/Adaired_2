'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';
import Mask from '../../../../../../public/assets/whitelabel/whiteLabelSocialMedia/MaskDots.png';

const BookAConsultation = ({ buildlinks }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);
  return (
    <div>
      {buildlinks?.isVariant === '01' && (
        // <div
        //   className={`${buildlinks?.isBgWhite ? 'bg-gradient-to-b from-black to-[#051C40]' : 'bg-[#FFFCF8]'} py-[3rem] lg:py-[2rem]`}
        // >
        <div
          className={`py-[3rem] lg:py-[2rem] ${buildlinks?.bgImg
            ? ''
            : buildlinks?.isBgWhite
              ? 'bg-gradient-to-b from-black to-[#051C40]'
              : 'bg-[#FFFCF8]'
            }`}
          style={
            buildlinks?.bgImg
              ? {
                backgroundImage: `url(${buildlinks.bgImg?.src})`,
              }
              : {}
          }
        >
          <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
            <div
              className={`order-2 my-auto flex flex-col items-center transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <Heading
                className="flex justify-center lg:justify-start"
                subTitle={''}
                breakIndex={buildlinks?.breakIndex}
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
                breakIndex={buildlinks?.breakIndex}
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
                      {item?.description}
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
      {buildlinks?.isVariant === '03' && (
        <div
          className={`py-[3rem] lg:py-[4rem]`}
          style={{
            backgroundImage: `url(${buildlinks?.bgImg?.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
            <div
              className={`order-2 my-auto flex flex-col items-center transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <h1
                className={`font-normal text-[#FFFFFF] lg:text-left`}
              >
                {buildlinks?.label}
              </h1>

              <Heading
                breakIndex={buildlinks?.breakIndex}
                isH1={true}
                title={buildlinks?.heading}
                isBgWhite={buildlinks?.isBgWhite && true}
                className=''
              />

              <div className="space-y-4">
                {buildlinks?.data?.map((item: any) => {
                  return (
                    <p
                      className={`${buildlinks?.isBgWhite && 'text-[#FFFFFF]'} `}
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
                  className="mt-[3rem]"
                />
              )}
            </div>

            <div
              ref={ref}
              className={`group order-1 flex justify-center justify-items-center p-10 transition-all duration-1000 lg:order-2 lg:justify-end lg:justify-items-end ${isVisible ? 'translate-x-0 opacity-100 lg:translate-x-16' : '-translate-x-0 opacity-0'} ${buildlinks?.isCode02 ? 'items-end' : 'items-center'}`}
            >
              <div className="relative mx-auto flex-1">
                <div
                  className={`mx-[1rem] my-[1rem] flex items-center justify-center transition-all duration-1000 md:mx-[0.65rem] md:my-[0.65rem] lg:mx-[2.65rem] lg:my-[2.65rem] ${isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-16 opacity-0'
                    }`}
                >
                  <Image
                    src={buildlinks?.img}
                    alt="About Image"
                    width={625}
                    height={470}
                    className="my-[0rem] aspect-[625/470] w-[clamp(15rem,32vw,32.063rem)] rounded-lg transition-opacity transition-transform md:w-[clamp(16rem,60vw,62.063rem)] lg:w-[clamp(14rem,35vw,39.063rem)]"
                  />
                </div>

                {/* MASK – TOP RIGHT */}
                <Image
                  src={Mask}
                  alt="Mask Image"
                  width={246}
                  height={136}
                  className="absolute right-[-3rem] top-[-2rem] -z-10 lg:right-0 lg:top-0"
                />

                {/* MASK – BOTTOM LEFT */}
                <Image
                  src={Mask}
                  alt="Mask Image"
                  width={246}
                  height={136}
                  className="absolute bottom-[-1.6rem] left-[-3rem] -z-10 lg:bottom-0 lg:left-0"
                />
              </div>
            </div>
          </MaxWidthWrapper>
          <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      )}
      {buildlinks?.isVariant === '04' && (
        <div
          className={`pb-[3rem] lg:pb-0`}
          style={{
            backgroundImage: `url(${buildlinks?.bgImg?.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
            <div
              className={`order-2 my-auto flex flex-col items-center transition-all duration-1000 lg:order-1 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <h1
                className={`font-normal text-[#FFFFFF] lg:text-left`}
              >
                {buildlinks?.label}
              </h1>

              <Heading
                breakIndex={buildlinks?.breakIndex}
                isH1={true}
                title={buildlinks?.heading}
                isBgWhite={buildlinks?.isBgWhite && true}
                className=''
              />

              <div className="space-y-4">
                {buildlinks?.data?.map((item: any) => {
                  return (
                    <p
                      className={`${buildlinks?.isBgWhite && 'text-[#FFFFFF]'} `}
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
                  className="mt-[3rem]"
                />
              )}
            </div>

            <div
              ref={ref}
              className={`group order-1 flex justify-center justify-items-center p-10 transition-all duration-1000 lg:order-2 lg:justify-end lg:justify-items-end ${isVisible ? 'translate-x-0 opacity-100 lg:translate-x-16' : '-translate-x-0 opacity-0'} ${buildlinks?.isCode02 ? 'items-end' : 'items-center'}`}
            >
              <div className="relative mx-auto flex-1">
                <div
                  className={`mx-[1rem] my-[1rem] flex items-center justify-center transition-all duration-1000 md:mx-[0.65rem] md:my-[0.65rem] lg:mx-[2.65rem] lg:my-[2.65rem] ${isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-16 opacity-0'
                    }`}
                >
                  <Image
                    src={buildlinks?.img}
                    alt="About Image"
                    width={625}
                    height={534}
                    className="my-[0rem] aspect-[625/534] w-[clamp(15rem,32vw,32.063rem)] rounded-lg transition-opacity transition-transform md:w-[clamp(16rem,60vw,62.063rem)] lg:w-[clamp(14rem,35vw,39.063rem)]"
                  />
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default BookAConsultation;
