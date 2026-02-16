'use client';
import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import Image from 'next/image';
import FutureProof from './FutureProof';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

const WhatIncluded = ({ whatIncluded }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  return (
    <section ref={ref} className="py-[3rem] lg:py-[4rem]">
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            breakIndex={5}
            title={whatIncluded?.heading}
            description={whatIncluded?.description}
            isInCenter={true}
            isBgWhite={true}
          />
          <div>
            {whatIncluded?.isVariant === '01' && (
              <div className="grid grid-cols-1 gap-6 pt-[1rem] lg:grid-cols-3">
                {whatIncluded?.list?.map((card: any, index: number) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl border bg-[#F3F3F3] px-[2rem] pb-[4rem] pt-[2rem] transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{
                      transitionDelay: isVisible ? '0ms' : `${index * 280}ms`,
                    }}
                  >
                    <div className="">
                      <div className="flex items-center justify-center lg:justify-start lg:justify-items-start">
                        <Image src={card.icon} alt="" width={60} height={60} />
                      </div>

                      <h3 className="py-[1.5rem]">{card.title}</h3>

                      <div className="space-y-4">
                        {card.description?.map(
                          (desc: string, index: number) => (
                            <p key={index} className="leading-relaxed">
                              {desc}
                            </p>
                          )
                        )}
                      </div>

                      <a
                        href={card.linkHref}
                        className="absolute bottom-[2rem] left-[0rem] flex w-full items-center justify-center gap-2 lg:left-[2rem] lg:justify-start"
                      >
                        <span>{'Get Your Free AI SEO Audit'}</span>
                        <MdOutlineArrowOutward />
                      </a>
                    </div>
                  </div>
                ))}
                {whatIncluded?.isFetureProofVisible && (
                  <FutureProof handleClick={() => setOpen(true)} />
                )}
              </div>
            )}
            {whatIncluded?.isVariant === '02' && (
              <div className="grid grid-cols-1 gap-6 pt-[1rem] lg:grid-cols-2">
                {whatIncluded?.list?.map((card: any, index: number) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl border bg-[#FAFAFA] px-[2rem] pb-[4rem] pt-[2rem] transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{
                      transitionDelay: isVisible ? '0ms' : `${index * 280}ms`,
                    }}
                  >
                    <div className="">
                      <div className="flex items-center justify-center lg:justify-start lg:justify-items-start">
                        <Image src={card.icon} alt="" width={60} height={60} />
                      </div>

                      <h3 className="py-[1.5rem]">{card.title}</h3>

                      <div className="space-y-4">
                        {card.description?.map(
                          (desc: string, index: number) => (
                            <p key={index} className="leading-relaxed">
                              {desc}
                            </p>
                          )
                        )}
                      </div>
                      <a
                        href={card.linkHref}
                        className={`${index === 0 && 'text-[#00769D]'} ${index === 1 && 'text-[#5E8E3E]'} ${index === 2 && 'text-[#D84861]'} ${index === 3 && 'text-[#7D79FD]'} absolute bottom-[2rem] left-[0rem] flex w-full items-center justify-center gap-2 lg:left-[2rem] lg:justify-start`}
                      >
                        <span>{'Get Your Free AI SEO Audit'}</span>
                        <MdOutlineArrowOutward />
                      </a>
                    </div>
                  </div>
                ))}
                {whatIncluded?.isFetureProofVisible && <FutureProof />}
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default WhatIncluded;
