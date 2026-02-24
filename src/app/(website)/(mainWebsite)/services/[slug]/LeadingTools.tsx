'use client';
import React from 'react';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';

import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const LeadingTools = ({ leadingTools }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  // const data = [
  //   client_1,
  //   client_2,
  //   client_3,
  //   client_4,
  //   client_5,
  // ];gjgj

  const row1 = leadingTools?.list?.slice(0, 10) || [];
  const row2 = leadingTools?.list?.slice(10, 20) || [];
  const row3 = leadingTools?.list?.slice(20, 30) || [];

  const row1Duplicated = [...row1, ...row1];
  const row2Duplicated = [...row2, ...row2];
  const row3Duplicated = [...row3, ...row3];

  return (
    <div
      ref={ref}
      className={`overflow-hidden bg-cover ${leadingTools?.isGapTop
        ? 'pb-[3rem] lg:pb-[4rem]'
        : 'pb-[3rem] pt-[2rem] lg:pb-[4rem] lg:pt-[2.5rem]'
        } `}
      style={{
        backgroundImage: `url(${leadingTools?.bgImage.src})`,
      }}
    >
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            breakIndex={6}
            title={leadingTools?.heading}
            description={leadingTools?.description}
            isInCenter={true}
            isBgWhite={!leadingTools?.bgImage && true}
          />
        </div>

        {/* <div className="grid grid-cols-2 gap-4 pt-[1rem] sm:grid-cols-3 lg:grid-cols-7">
          {leadingTools?.list?.map((client: any, idx: any) => (
            <div
              key={idx}
              className={`group flex h-[6rem] items-center justify-center overflow-hidden rounded-[20px] border-[1px] border-[#000000]/5 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} `}
              style={{
                transitionDelay: `${idx * 60}ms`,
              }}
            >
              <Image
                src={client}
                // width={242}
                // height={12}
                fill
                alt="client logo"
                className="transform transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>*/}

        {leadingTools?.isVariant === '01' && (
          <div className="grid grid-cols-2 gap-4 pt-[1rem] sm:grid-cols-3 lg:grid-cols-7">
            {leadingTools?.list?.map((leadingTools: any, idx: number) => (
              <div
                key={idx}
                className={`group relative flex h-[6rem] items-center justify-center overflow-hidden rounded-[20px] border border-black/5 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}
                style={{
                  transitionDelay: `${idx * 60}ms`,
                }}
              >
                <Image
                  src={leadingTools?.img}
                  alt="client logo"
                  className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        )}

        {leadingTools?.isVariant === '02' && (
          <div>
            <div className="relative mt-4 sm:mt-6">
              <div className="flex w-max animate-marquee gap-2 sm:gap-3 lg:gap-[2rem]">
                {row1Duplicated.map((client, idx) => (
                  <div
                    key={`r1-${idx}`}
                    className={`group relative flex-shrink-0 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                      }`}
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    <Image
                      src={client?.img}
                      alt="client logo"
                      width={225}
                      height={90}
                      className="my-0 h-full w-full transform object-contain transition-transform duration-300 ease-out group-hover:scale-110 md:my-4"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex w-max animate-marquee gap-2 [animation-direction:reverse] sm:gap-3 lg:gap-[2rem]">
                {row2Duplicated.map((client, idx) => (
                  <div
                    key={`r2-${idx}`}
                    className={`group relative flex-shrink-0 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                      }`}
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    <Image
                      src={client?.img}
                      alt="client logo"
                      width={225}
                      height={90}
                      className="my-0 h-full w-full transform object-contain transition-transform duration-300 ease-out group-hover:scale-110 md:my-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default LeadingTools;
