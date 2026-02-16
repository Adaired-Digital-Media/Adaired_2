'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import Image from 'next/image';
import rocket from '../../../../../../public/assets/icons/rocket.svg';
import groth from '../../../../../../public/assets/icons/adwords-campaign.svg';
import groth2 from '../../../../../../public/assets/groth2.png';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import image from '../../../../../../public/assets/aiseo/AISEORESULT.png';

const AdairedServiceResult = ({ aiseoResult }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const activeItem =
    activeIndex !== null ? aiseoResult?.list?.[activeIndex] : null;

  return (
    <div>
      {aiseoResult?.isVariant === '01' && (
        <div
          className={`py-[3rem] lg:py-[4rem] ${aiseoResult?.isBgColor ? 'bg-[#FFF8F0]' : 'bg-[#FFFFFF]'}`}
        >
          <MaxWidthWrapper>
            <div
              className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
            >
              <div className="block gap-[6rem] lg:flex">
                <div
                  className={`${aiseoResult?.description?.length > 0 ? 'w-[100%] pr-[10%] lg:w-[42%]' : 'flex w-[100%] items-center justify-center'}`}
                >
                  <Heading title={aiseoResult?.heading} />
                </div>
                <div
                  className={`${aiseoResult?.description?.length > 0 ? 'w-[100%] lg:w-[55%]' : 'w-[0%]'}`}
                >
                  {aiseoResult?.description?.map((item: any) => {
                    return <p className="my-3">{item}</p>;
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-[6rem] pt-[3rem] lg:flex-row">
              <div
                ref={ref}
                className={`relative h-[480px] w-full rounded-[20px] transition-all duration-1000 lg:w-[42%] ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-16 opacity-0'
                }`}
              >
                {/* Main image */}
                <Image
                  src={aiseoResult?.img}
                  fill
                  className="rounded-[20px] object-cover"
                  alt="image"
                  priority
                />

                {!aiseoResult?.isBgColor && (
                  <div className="absolute left-[-1rem] top-[-1rem] h-[75px] w-[70px] sm:h-[95px] sm:w-[90px] lg:h-[123px] lg:w-[115px]">
                    <Image
                      src={rocket}
                      fill
                      alt="rocket"
                      className="object-fill"
                    />
                  </div>
                )}
                {/* Rocket wrapper */}
              </div>

              {/* RIGHT ACCORDION */}
              <div className="flex w-full flex-col gap-4 lg:w-[55%]">
                {aiseoResult?.list?.map((item: any, index: number) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={index}
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`cursor-pointer rounded-[20px] border p-[1.5rem] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${aiseoResult?.isBgColor ? 'bg-[#FFFFFF]' : 'bg-[#F3F3F3]'} ${
                        isActive
                          ? 'border-[#FB9100]/20 bg-[#F3F3F3]'
                          : 'border-[#00000014] bg-[#F3F3F3]'
                      }`}
                      style={{
                        transitionDelay: `${index * 280}ms`, // 👈 stagger here
                      }}
                    >
                      {/* HEADER */}
                      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex flex-col items-center gap-3 lg:flex-row">
                          <Image
                            src={groth}
                            width={32}
                            height={32}
                            alt="icon"
                          />
                          <p className="font-bold">{item?.name}</p>
                        </div>

                        {/* ARROW */}
                        {isActive ? (
                          <MdKeyboardArrowUp
                            size={26}
                            className="hidden text-[#FB9100] lg:block"
                          />
                        ) : (
                          <MdKeyboardArrowDown
                            size={26}
                            className="hidden text-[#999] lg:block"
                          />
                        )}
                      </div>

                      {/* BODY */}
                      <div
                        className={`ease-in-ou grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-700 ${
                          isActive
                            ? 'mt-3 grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          {item?.description?.map((desc: string, i: number) => (
                            <p key={i} className="my-2 text-left text-[#333]">
                              {desc}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      )}
      {aiseoResult?.isVariant === '02' && (
        <div className={`bg-[#FFF8F0] py-[3rem] lg:py-[4rem]`}>
          <MaxWidthWrapper>
            <div
              className={`mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
            >
              <Heading
                isInCenter={true}
                isBgWhite={true}
                title={aiseoResult?.heading}
                description={aiseoResult?.description}
              />
            </div>

            <div className="flex flex-col justify-between gap-[6rem] pt-[3rem] lg:flex-row">
              <div
                ref={ref}
                className={`relative h-[600px] w-full rounded-[20px] transition-all duration-1000 lg:w-[42%] ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-16 opacity-0'
                }`}
              >
                {/* Main image */}
                <Image
                  src={aiseoResult?.img}
                  fill
                  className="rounded-[20px] object-cover"
                  alt="image"
                  priority
                />

                {!aiseoResult?.isBgColor && (
                  <div className="absolute left-[-1rem] top-[-1rem] h-[75px] w-[70px] sm:h-[95px] sm:w-[90px] lg:h-[123px] lg:w-[115px]">
                    <Image
                      src={rocket}
                      fill
                      alt="rocket"
                      className="object-fill"
                    />
                  </div>
                )}
                {/* Rocket wrapper */}
              </div>

              {/* RIGHT ACCORDION */}
              <div className="flex w-full flex-col gap-4 lg:w-[55%]">
                {aiseoResult?.list?.map((item: any, index: number) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={index}
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`cursor-pointer rounded-[20px] border p-[1.5rem] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${aiseoResult?.isBgColor ? 'bg-[#FFFFFF]' : 'bg-[#F3F3F3]'} ${
                        isActive
                          ? 'border-[#FB9100]/20 bg-[#FFFFFF]'
                          : 'border-[#00000014] bg-[#FFFFFF]'
                      }`}
                      style={{
                        transitionDelay: `${index * 280}ms`, // 👈 stagger here
                      }}
                    >
                      {/* HEADER */}
                      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex flex-col items-center gap-3 lg:flex-row">
                          <Image
                            src={groth2}
                            width={32}
                            height={32}
                            alt="icon"
                          />
                          <p className="font-bold">{item?.name}</p>
                        </div>

                        {/* ARROW */}
                        {isActive ? (
                          <MdKeyboardArrowUp
                            size={26}
                            className="hidden text-[#FB9100] lg:block"
                          />
                        ) : (
                          <MdKeyboardArrowDown
                            size={26}
                            className="hidden text-[#999] lg:block"
                          />
                        )}
                      </div>

                      {/* BODY */}
                      <div
                        className={`ease-in-ou grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-700 ${
                          isActive
                            ? 'mt-3 grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          {item?.description?.map((desc: string, i: number) => (
                            <p key={i} className="my-2 text-left text-[#333]">
                              {desc}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      )}
    </div>
  );
};

export default AdairedServiceResult;
