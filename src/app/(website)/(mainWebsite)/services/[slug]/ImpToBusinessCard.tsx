'use client';
import React, { useState } from 'react';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import ImpToBusinessCradImg from '../../../../../../public/assets/images/services/aeoService/ImpToBusinessCradImg.png';
import Image from 'next/image';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

const ImpToBusinessCard = ({ handleClick }: any) => {
  //test
  return (
    <div className="relative min-h-[450px] rounded-2xl">
      {/* transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 */}
      <Image
        src={ImpToBusinessCradImg}
        fill
        alt="hero bg"
        priority
        className="pointer-events-none rounded-2xl object-fill lg:object-cover"
      />
      <div className="absolute left-[2.5rem] right-[5rem] top-[2rem] h-full">
        <h1 className="text-center text-white lg:text-left font-normal">
          Become the Brand
        </h1>

        <h1 className="text-center text-white lg:text-left">
          AI Search Engines
        </h1>
        <h1 className='text-center text-white lg:text-left'>
          Trust
        </h1>

        <p className="whitespace-pre-line py-[1rem] text-white">
          AI-powered search is already reshaping how customers discover information. The question isn’t whether AI visibility matters; it’s whether your brand will be cited or overlooked.
        </p>

        <p className="whitespace-pre-line py-[1rem] text-white">
          Position your business to be found, trusted, and referenced in AI-generated answers.
        </p>

        <div className="absolute bottom-[4rem] left-0 right-0 flex justify-center lg:justify-start">
          <SaveAndCancel
            name="Build My AEO Strategy"
            isIcon={true}
            isBold={true}
            isBgWhite={true}
            buttonWidth=""
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ImpToBusinessCard;
