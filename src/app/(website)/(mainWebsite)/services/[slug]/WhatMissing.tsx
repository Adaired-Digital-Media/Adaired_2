import React from 'react';
import { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { cards } from './Card';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import Image from 'next/image';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

const WhatMissing = ({ whatMissing }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  return (
    <section
      ref={ref}
      className={`py-[3rem] lg:py-[4rem] bg-[${whatMissing?.bgColor || '#FFFFFF'}]`}
    >
      {whatMissing?.isVariant === '01' && (
        <MaxWidthWrapper>
          <div className={``}>
            <Heading
              breakIndex={whatMissing?.breakIndex}
              title={whatMissing?.heading}
              isInCenter={whatMissing?.isInCenter}
              description={whatMissing?.description}
              isDecVarticle={!whatMissing?.isInCenter}
              isBgWhite={!whatMissing?.bgColor || whatMissing?.isInCenter && true}
            />

            <div className="grid grid-cols-1 gap-6 pt-[3rem] lg:grid-cols-3">
              {whatMissing?.list?.map((card: any, index: number) => (
                <div
                  key={index}
                  className={`relative rounded-2xl border border-[#000000]/15 bg-[#FFFFFF] p-[2.5rem] transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  // style={{
                  //     transitionDelay: `${index * 280}ms`, // 👈 stagger here
                  // }}
                  style={{
                    transitionDelay: isVisible ? '0ms' : `${index * 280}ms`,
                  }}
                >
                  {/* <div className="flex items-center justify-center mb-10 lg:justify-start lg:justify-items-start">
                                    <div className='bg-black px-8 py-4 rounded-[36px]'>
                                        <Image src={card.icon} alt="" width={35} height={35} />
                                    </div>
                                </div> */}

                  <div className="mb-6 flex items-center justify-center sm:mb-8 lg:mb-10 lg:justify-start">
                    <div className="rounded-[24px] bg-black px-5 py-3 sm:rounded-[30px] sm:px-6 sm:py-3 lg:rounded-[36px] lg:px-8 lg:py-4">
                      <Image
                        src={card.icon}
                        alt="icons"
                        width={28}
                        height={28}
                        className="sm:h-[30px] sm:w-[30px] lg:h-[35px] lg:w-[35px]"
                      />
                    </div>
                  </div>

                  <h3 className="py-[1rem]">{card.title}</h3>
                  <div className="space-y-4">
                    {card.description.map((text: string, i: number) => (
                      <p key={i} className="leading-relaxed">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      )}

      {whatMissing?.isVariant === '02' && (
        <MaxWidthWrapper>
          <div className={``}>
            <Heading
              breakIndex={whatMissing?.breakIndex}
              title={whatMissing?.heading}
              isInCenter={whatMissing?.isInCenter}
              isDecVarticle={!whatMissing?.isInCenter}
              isBgWhite={whatMissing?.bgColor && true}
            />

            <div className="grid grid-cols-1 gap-6 p-[3rem] lg:grid-cols-4">
              {whatMissing?.list?.map((card: any, index: number) => (
                <div
                  key={index}
                  className={`relative rounded-2xl border border-[#000000]/15 bg-[#FFFFFF] p-[2.5rem] transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  // style={{
                  //     transitionDelay: `${index * 280}ms`, // 👈 stagger here
                  // }}
                  style={{
                    transitionDelay: isVisible ? '0ms' : `${index * 280}ms`,
                  }}
                >
                  {/* <div className="flex items-center justify-center mb-10 lg:justify-start lg:justify-items-start">
                                    <div className='bg-black px-8 py-4 rounded-[36px]'>
                                        <Image src={card.icon} alt="" width={35} height={35} />
                                    </div>
                                </div> */}

                  <div className="mb-2 flex items-center justify-center sm:mb-4 lg:mb-6 lg:justify-start">
                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-black p-2 md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]">
                      <Image
                        src={card.icon}
                        alt="icons"
                        width={40}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <h3 className="py-[1rem]">{card.title}</h3>
                  <div className="space-y-4">
                    {card.description.map((text: string, i: number) => (
                      <p key={i} className="text-left leading-relaxed">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Heading
              isInCenter={whatMissing?.isInCenter}
              description={whatMissing?.description}
              isDecVarticle={!whatMissing?.isInCenter}
              isBgWhite={whatMissing?.bgColor && true}
            />

            <div className="flex justify-center">
              <SaveAndCancel
                name={whatMissing?.button}
                isBgWhite={true}
                isBorder={true}
                isIcon={true}
                isBold={true}
                handleClick={() => setOpen(!open)}
                className="pt-[1rem]"
              />
            </div>
          </div>

          <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
        </MaxWidthWrapper>
      )}
    </section>
  );
};

export default WhatMissing;
