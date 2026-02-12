'use client';

import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import React from 'react';
import Image from 'next/image';

import { SERVICES_DATA } from './dataa';

import img1 from '../../../../../../public/assets/linkBuilding/AI-Reporting-Tools-Automated-AI-Generated-Summary 1.png';
import img2 from '../../../../../../public/assets/linkBuilding/custom-digital-marketing-analytics-dashboard 1.png';
import arrow from '../../../../../../public/assets/linkBuilding/Vector.png';

const images = [img1, img2];
const areYouTired = SERVICES_DATA.linkBuilding.areYouTired;

const AreYouTired = () => {
    return (
        <div className="bg-[#FAFAFA] py-[3rem] lg:py-[4rem]">
            <MaxWidthWrapper>
                <Heading
                    breakIndex={8}
                    isBgWhite
                    isInCenter
                    subTitle=""
                    title={areYouTired.heading}
                />

                {areYouTired.data.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-10 py-12 items-center lg:flex-row lg:items-center lg:justify-between ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* TEXT */}
                        <div className="flex flex-col justify-center space-y-7 max-w-xl order-2 lg:order-1">
                            <h2>{item.desctioption}</h2>

                            {item.list.map((listItem, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 sm:gap-4"
                                >
                                    <Image
                                        src={arrow}
                                        width={17}
                                        height={23}
                                        alt="arrow"
                                        className="shrink-0 mt-1 w-[14px] h-auto sm:w-[17px]"
                                    />

                                    <p className='text-left'>{listItem.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* IMAGE CARD */}
                        <div className="w-full lg:w-auto flex justify-center order-1 lg:order-2">
                            <div className="bg-[#F3F3F3] rounded-[30px] px-4 py-3 sm:px-10 sm:py-8 lg:px-[3rem] lg:py-[3rem]">
                                <div
                                    className="group relative flex items-center justify-center w-[280px] h-[220px] sm:w-[380px] sm:h-[310px] lg:w-[600px] lg:h-[435px] overflow-hidden md:p-4"
                                >
                                    <Image
                                        src={images[index]}
                                        fill
                                        alt="are-you-tired"
                                        className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </MaxWidthWrapper>
        </div>
    );
};

export default AreYouTired;