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
        {stopStruggling?.isCenter ? (
          <div
            className={`mx-auto w-[100%] text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            <h2
              className={`mx-auto w-[100%] text-center font-normal text-[#FFFFFF]  ${stopStruggling?.span && 'font-normal'}`}
            >
              {stopStruggling?.span}
            </h2>

            {stopStruggling?.span ? (
              // <h1 className="mx-auto w-[100%] text-center text-[#FFFFFF]">
              //   {stopStruggling?.title}
              // </h1>
              <Heading
                isH1={true}
                headingParts={stopStruggling?.headingParts}
                textColor={stopStruggling?.textColor}
              />
            ) : (
              // <h2 className="mx-auto w-[100%] pb-4 text-center text-[#FFFFFF]">
              //   {stopStruggling?.title}
              // </h2>
              <Heading
                headingParts={stopStruggling?.headingParts}
              />
            )}

            <div className="space-y-4 w-[100%] mx-auto lg:w-[80%] text-center">
              {stopStruggling?.description?.map((item: any, idx: number) => (
                <p key={idx} className="text-center text-white">
                  {item}
                </p>
              ))}
            </div>

            {stopStruggling?.button && (
              <div className="mt-[2rem] flex justify-center">
                <SaveAndCancel
                  name={stopStruggling?.button}
                  isBgWhite={true}
                  isIcon={true}
                  isHoverBgBlue={stopStruggling?.isHoverBgBlue && true}
                  handleClick={() => setOpen(!open)}
                  buttonWidth=""
                />
              </div>
            )}
          </div>
        ) : (
          <div
            className={`grid gap-10 transition-all duration-1000 lg:grid-cols-2 ${isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-12 opacity-0'
              }`}
          >
            <div>
              {/* <h2 className="font-semibold text-white">
                {stopStruggling?.title}
              </h2> */}
              <Heading
                headingParts={stopStruggling?.headingParts}
              />
            </div>

            <div>
              <div className="space-y-4">
                {stopStruggling?.description?.map((item: any, idx: number) => (
                  <p key={idx} className="text-white">
                    {item}
                  </p>
                ))}
              </div>

              {stopStruggling?.button && (
                <div className="mt-14 flex w-full justify-center lg:justify-start">
                  <SaveAndCancel
                    name={stopStruggling?.button}
                    isBgWhite={true}
                    isIcon={true}
                    isBorder={true}
                    isHoverBgBlue={stopStruggling?.isHoverBgBlue && true}
                    handleClick={() => setOpen(true)}
                    className="w-fit"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Stopstruggling;
