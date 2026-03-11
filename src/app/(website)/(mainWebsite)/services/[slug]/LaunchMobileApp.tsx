'use client';
import React, { useState } from 'react';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import LaunchMobileAppCardBg from '../../../../../../public/assets/images/services/mobileAppDevelopment/LaunchMobileAppCardBg.png';
import LaunchMobileAppCardImage from '../../../../../../public/assets/images/services/mobileAppDevelopment/LaunchMobileAppCardImage.png';
import Image from 'next/image';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

const LaunchMobileApp = ({ handleClick }: any) => {
    //test
    return (
        <div className="relative min-h-[480px] lg:min-h-[450px] rounded-2xl">
            <Image
                src={LaunchMobileAppCardBg}
                fill
                alt="hero bg"
                priority
                className="relative pointer-events-none rounded-2xl object-fill lg:object-cover"
            />

            <Image
                src={LaunchMobileAppCardImage}
                alt="hero image"
                width={424}
                height={413}
                priority
                className="absolute w-[clamp(12rem,25vw,26rem)] bottom-0 right-0 pointer-events-none rounded-2xl"
            />
            <div 
            className='absolute w-full p-[2rem] md:p-[4rem] lg:p-[3rem] h-full'
            >
                <h1 className="text-center text-white lg:text-left font-normal">
                    Launch Your Next
                </h1>

                <h1 className="text-center text-white lg:text-left">
                    Mobile App with
                </h1>
                <h1 className='text-center text-white lg:text-left'>
                    Experts
                </h1>

                <p className="pt-[1rem] lg:pt-[2rem] text-white font-semibold text-center lg:text-left">
                    Custom Android and iOS apps built to
                </p>

                <p className="text-white font-semibold text-center lg:text-left">
                    scale with your business.
                </p>

                <div className="absolute pt-[2rem] sm:px-[7rem] sm:p-[3rem] md:p-[4rem] lg:px-0">
                    <SaveAndCancel
                        name="Ask a Developer"
                        isIcon={true}
                        isBold={true}
                        isBgWhite={true}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default LaunchMobileApp;
