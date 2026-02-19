import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import { SERVICES_DATA } from './data';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const WhatMakesAdaired = ({ whatMkeDeferent }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className="py-[1.5rem] lg:py-[4rem]">
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
            return (
              <div
                style={{
                  transitionDelay: `${idx * 120}ms`,
                }}
                className={`mt-[2rem] flex flex-col justify-between gap-10 rounded-[20px] p-[2rem] transition-all duration-700 lg:flex-row lg:gap-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${
                  shouldUseOrange ? 'bg-[#FB9100]/5' : 'bg-[#F9F9F9]'
                }`}
              >
                <div className="order-2 my-auto w-[100%] lg:order-1 lg:w-[50%]">
                  <h3>{item?.name}</h3>
                  <div className="pt-[1rem]">
                    {item?.description?.map((desc: any) => {
                      return <p className="my-[1rem]">{desc}</p>;
                    })}
                  </div>
                </div>
                <div className="order-1 flex w-[100%] justify-center justify-items-center lg:order-2 lg:w-[40%] lg:justify-end lg:justify-items-end">
                  <Image src={item?.img} alt="if" className="" />
                </div>
              </div>

              // <div
              //   style={{ transitionDelay: `${idx * 120}ms` }}
              //   className={`my-[2rem] grid grid-cols-1 gap-6 rounded-[20px] p-[2rem] transition-all duration-700 lg:grid-cols-2 lg:gap-0 ${
              //     isVisible
              //       ? 'translate-y-0 opacity-100'
              //       : 'translate-y-10 opacity-0'
              //   } ${isOrange ? 'bg-[#FB9100]/5' : 'bg-[#F9F9F9]'}`}
              // >
              //   {/* IMAGE */}
              //   <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              //     <Image
              //       src={item?.img}
              //       alt={item?.name}
              //       className="h-auto w-full lg:w-auto"
              //     />
              //   </div>

              //   {/* TEXT */}
              //   <div className="order-2 flex w-full flex-col items-center justify-center lg:order-1 lg:items-start">
              //     <h3>{item?.name}</h3>
              //     <div className="pt-[1rem]">
              //       {item?.description?.map((desc: any, i: number) => (
              //         <p key={i} className="my-[1rem]">
              //           {desc}
              //         </p>
              //       ))}
              //     </div>
              //   </div>
              // </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WhatMakesAdaired;
