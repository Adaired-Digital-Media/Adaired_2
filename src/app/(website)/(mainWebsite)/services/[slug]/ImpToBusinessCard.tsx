'use client';
import React, { useState } from 'react';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import ImpToBusinessCradImg from '../../../../../../public/assets/images/services/aeoService/ImpToBusinessCradImg.png';
import Image from 'next/image';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';


const ImpToBusinessCard = ({ handleClick, idx, isVisible, cardData  }: any) => {
  return (
    <div
      className={`relative min-h-[450px] rounded-2xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      style={{
        transitionDelay: `${idx * 280}ms`, // 👈 stagger like other cards
      }}
    >
      {/* transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 */}
      <Image
        src={cardData?.img}
        fill
        alt="hero bg"
        priority
        className="pointer-events-none rounded-2xl object-fill lg:object-cover"
      />
      <div className="absolute lg:left-[2.5rem] md:left-[2rem] left-[1rem] lg:right-[5rem] md:right-[2rem] right-[1rem] lg:top-[2rem] md:top-[1.5rem] top-[1rem] h-full">
        {/* <h1 className="text-center text-white lg:text-left font-normal">
          Become the Brand
        </h1>

        <h1 className="text-center text-white lg:text-left">
          AI Search Engines
        </h1>
        <h1 className='text-center text-white lg:text-left'>
          Trust
        </h1> */}

        <h1 className="text-center text-white lg:text-left font-normal">
          {cardData?.heading}
        </h1>

         {cardData.heading1.map((heading: any, i: number) => (
          <h1 key={i} className="text-center text-white lg:text-left">
            {heading}
          </h1>
        ))}

        {cardData.description.map((desc: any, i: number) => (
          <p
            key={i}
            className={`text-white ${cardData?.code === 1 ? "" : "py-[1rem]" }`}
          >
            {desc}
          </p>
        ))}


        {/* <p className="whitespace-pre-line lg:py-[1rem] py-0 lg:pb-0 pb-[1rem] text-white">
          AI-powered search is already reshaping how customers discover information. The question isn’t whether AI visibility matters; it’s whether your brand will be cited or overlooked.
        </p>

        <p className="whitespace-pre-line lg:py-[1rem] py-0 text-white">
          Position your business to be found, trusted, and referenced in AI-generated answers.
        </p> */}

        <div className="absolute lg:bottom-[4rem] md:bottom-[3rem] bottom-[2rem] left-0 right-0 flex justify-center lg:justify-start">
          <SaveAndCancel
            name={cardData.buttonName}
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
