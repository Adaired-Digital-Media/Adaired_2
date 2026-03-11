import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import CldImage from '@/app/(website)/components/UI/CldImage';

const WhatMakesAdaired = ({ whatMkeDeferent }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className={`py-[1.5rem] lg:py-[4rem] ${whatMkeDeferent?.bgGradient || 'bg-[#FFFFFF]'}`}>
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <Heading
              breakIndex={whatMkeDeferent?.breakIndex}
              title={whatMkeDeferent?.heading}
              isInCenter={whatMkeDeferent?.isInCenter}
              description={whatMkeDeferent?.description}
              isDecVarticle={!whatMkeDeferent?.isInCenter}
              isBgWhite={whatMkeDeferent?.bgColor && true}
            />
          </div>
        </div>
        <div className="pt-[1rem]">
          {whatMkeDeferent?.list?.map((item: any, idx: number) => {
            const isOrange = idx % 2 === 0;
            const shouldUseOrange =
              whatMkeDeferent?.isVariant === '02' ? !isOrange : isOrange;
            const whiteBgWithBorder =
              whatMkeDeferent?.isVariant === '03' ? !isOrange : isOrange;
            return (
              <div
                style={{
                  transitionDelay: `${idx * 120}ms`,
                }}
                className={`mt-[2rem] flex flex-col justify-between gap-10 rounded-[20px] p-[2rem] transition-all duration-700 lg:flex-row lg:gap-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${shouldUseOrange ? 'bg-[#FB9100]/5' : 'bg-[#F9F9F9]'} ${whiteBgWithBorder ? 'border border-[#F28F17]/10 bg-[#FB9100]/5' : 'border-[#051B3C]/17 border bg-white'}`}
              >
                <div className="order-2 my-auto w-[100%] lg:order-1 lg:w-[50%]">
                  <h3>{item?.name}</h3>
                  <div className="pt-[1rem]">
                    {item?.description?.map((desc: any) => {
                      return <p className="my-[1rem]">{desc}</p>;
                    })}
                  </div>
                </div>
                <div
                  className={`order-1 flex w-[100%] justify-center justify-items-center rounded-[20px] p-8 lg:order-2 lg:w-[40%] ${shouldUseOrange ? 'bg-[#F4F4F4]' : 'bg-[#F3F3F3]'} ${whiteBgWithBorder ? 'bg-[#FFF2DF]' : 'bg-[#F4F4F4]'}`}
                >
                  <div className="relative aspect-[525/334] w-full max-w-[525px]">
                    {typeof item?.img === 'string' ? (
                      <CldImage
                        src={item?.img}
                        alt={item?.name}
                        fill
                        className="object-contain transition-transform duration-300 ease-out hover:scale-110"
                      />
                    ) : (
                      <Image
                        src={item?.img}
                        alt={item?.name}
                        fill
                        className="object-contain transition-transform duration-300 ease-out hover:scale-110"
                      />
                    )}{' '}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WhatMakesAdaired;
