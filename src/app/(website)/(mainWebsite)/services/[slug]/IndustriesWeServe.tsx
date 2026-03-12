"use client"
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import { IoIosArrowRoundForward } from 'react-icons/io';

const IndustriesWeServe = ({ industriesWeServe }: any) => {
    const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
    const [isHover, setIsHover] = useState(false);


    return (
        <div
            ref={ref}
            className={`py-[3rem] lg:py-[4rem]`}
        >
            <MaxWidthWrapper>
                {industriesWeServe?.code === '01' && (
                    <div>
                        <div
                            className={`flex w-full justify-between transition-all duration-1000 lg:w-full ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
                        >
                            <Heading
                                isInCenter={true}
                                isBgWhite={true}
                                title={industriesWeServe?.heading}
                                description={industriesWeServe?.description}
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[1.5rem] transition-transform duration-500 ease-in-out pt-4">
                            {industriesWeServe?.list?.map((item: any) => (
                                <div className="relative inline-block">
                                    <Image
                                        src={item?.img}
                                        width={385}
                                        height={436}
                                        alt="img"
                                    />

                                    <div className='absolute bottom-[2rem] left-0 w-full px-6 py-3 flex justify-between items-center text-center gap-2'>
                                        <p className='font-bold text-left text-white'>
                                            {item?.btn}
                                        </p>

                                        <div className='bg-[#FFFFFF]/40 rounded-full p-1'>
                                            <IoIosArrowRoundForward
                                                size={30}
                                                className={`text-white ${isHover ? 'rotate-[360deg] transition-all duration-300 ease-out active:scale-95' : 'rotate-[310deg]'}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </MaxWidthWrapper>
        </div>
    );
};

export default IndustriesWeServe;