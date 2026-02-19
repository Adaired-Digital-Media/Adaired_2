import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { cards } from './Card';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import Image from 'next/image';

const WhatMissing = ({ whatMissing }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  return (
    <section
      ref={ref}
      className={`py-[3rem] lg:py-[4rem] bg-[${whatMissing?.bgColor || '#FFFFFF'}]`}
    >
      <MaxWidthWrapper>
        <div className={``}>
          <Heading
            breakIndex={whatMissing?.breakIndex}
            title={whatMissing?.heading}
            isInCenter={whatMissing?.isInCenter}
            description={whatMissing?.description}
            isDecVarticle={!whatMissing?.isInCenter}
            isBgWhite={!whatMissing?.bgColor && true}
          />

          <div className="grid grid-cols-1 gap-6 pt-[3rem] lg:grid-cols-3">
            {whatMissing?.list?.map((card: any, index: number) => (
              <div
                key={index}
                className={`relative rounded-2xl border border-[#F3F3F3] bg-[#FFFFFF] p-[2.5rem] transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
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
    </section>
  );
};

export default WhatMissing;
