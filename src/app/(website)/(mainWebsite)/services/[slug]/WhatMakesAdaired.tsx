import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import { SERVICES_DATA } from './data';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const WhatMakesAdaired = ({ whatMkeDeferent }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className="py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        {/* <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            breakIndex={5}
            isInCenter={true}
            isBgWhite={true}
            title={whatMkeDeferent?.heading}
          />
        </div> */}

        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <div className="flex gap-10">
            <div
              className={`${whatMkeDeferent?.description?.length > 0 ? 'w-[50%] pr-[5%]' : 'flex w-[100%] justify-center justify-items-center'}`}
            >
              <Heading title={whatMkeDeferent?.heading} />
            </div>
            <div
              className={`${whatMkeDeferent?.description?.length > 0 ? 'w-[50%]' : 'w-[0%]'}`}
            >
              {whatMkeDeferent?.description?.map((item: any) => {
                return <p className="my-3">{item}</p>;
              })}
            </div>
          </div>
        </div>
        <div className="pt-[3rem]">
          {whatMkeDeferent?.list?.map((item: any, idx: number) => {
            const isOrange = idx % 2 === 0;
            return (
              <div
                style={{
                  transitionDelay: `${idx * 120}ms`,
                }}
                className={`my-[2rem] flex justify-between rounded-[20px] p-[2rem] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isOrange ? 'bg-[#FB9100]/5' : 'bg-[#F9F9F9]'}`}
              >
                <div className="my-auto w-[100%] lg:w-[50%]">
                  <h3>{item?.name}</h3>
                  <div className="pt-[1rem]">
                    {item?.description?.map((desc: any) => {
                      return <p className="my-[1rem]">{desc}</p>;
                    })}
                  </div>
                </div>
                <div className="flex w-[100%] justify-end justify-items-end lg:w-[40%]">
                  <Image src={item?.img} alt="if" />
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
