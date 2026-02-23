'use client';
import React from 'react';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';

import client_1 from '../../../../../../public/assets/LeadingTools/Group 1000005353.png';
import client_2 from '../../../../../../public/assets/LeadingTools/Group 1000005354.png';
import client_3 from '../../../../../../public/assets/LeadingTools/Group 1000005355.png';
import client_4 from '../../../../../../public/assets/LeadingTools/Group 1000005356.png';
import client_5 from '../../../../../../public/assets/LeadingTools/Group 1000005428.png';
import client_6 from '../../../../../../public/assets/LeadingTools/Group 1000005432.png';
import client_7 from '../../../../../../public/assets/LeadingTools/Group 1000005432.png';

import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
//ds
const LeadingTools = ({ leadingTools }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const data = [
    client_1,
    client_2,
    client_3,
    client_4,
    client_5,
    client_6,
    client_7,
  ];

  return (
    <div
      ref={ref}
      className={`bg-cover ${
        leadingTools?.isGapTop
          ? 'pb-[3rem] lg:pb-[4rem]'
          : 'pb-[3rem] pt-[2rem] lg:pb-[4rem] lg:pt-[2.5rem]'
      } `}
      style={{
        backgroundImage: `url(${leadingTools?.bgImage.src})`,
      }}
    >
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            breakIndex={6}
            title={leadingTools?.heading}
            description={leadingTools?.description}
            isInCenter={true}
            isBgWhite={!leadingTools?.bgImage && true}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-[1rem] sm:grid-cols-3 lg:grid-cols-7">
          {data?.map((client, idx) => (
            <div
              key={idx}
              className={`group flex h-[6rem] items-center justify-center overflow-hidden rounded-[20px] border-[1px] border-[#000000]/5 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} `}
              style={{
                transitionDelay: `${idx * 60}ms`,
              }}
            >
              <Image
                src={client}
                // width={242}
                // height={12}
                fill
                alt="client logo"
                className="transform transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LeadingTools;
