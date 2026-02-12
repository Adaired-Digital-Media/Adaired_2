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
        <section ref={ref} className="py-[3rem] lg:py-[4rem]">
            <MaxWidthWrapper>
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                >
                    <Heading
                        breakIndex={7}
                        title={whatMissing?.heading}
                        description={whatMissing?.description}
                        isInCenter={true}
                        isBgWhite={true}
                    />
                    <div className="grid grid-cols-1 gap-6 pt-[3rem] lg:grid-cols-3">
                        {whatMissing?.list?.map((card: any, index: number) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl border border-[#F3F3F3] p-[2.5rem] transition-all duration-1000 hover:duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl 1400:h-[46rem] 1440:h-[44rem] 1470:h-[43rem] 1600:h-[42rem] 1710:h-[40rem] 3xl:h-[36rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                // style={{
                                //     transitionDelay: `${index * 280}ms`, // 👈 stagger here
                                // }}
                                style={{
                                    transitionDelay: isVisible ? '0ms' : `${index * 280}ms`,
                                }}
                            >
                                <div className="flex items-center justify-center mb-10 lg:justify-start lg:justify-items-start">
                                    <div className='bg-black px-8 py-4 rounded-[36px]'>
                                        <Image src={card.icon} alt="" width={35} height={35} />
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