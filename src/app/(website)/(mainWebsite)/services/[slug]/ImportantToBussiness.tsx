import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import groth from '../../../../../../public/assets/icons/growth 2.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import DottedLine from '../../../../../../public/assets/Line 28.png';
import keyStatsImg from '../../../../../../public/assets/keyStatsImg.png';
import rocket from '../../../../../../public/assets/icons/rocket.svg';

const ImportantToBussiness = ({ importantToBussiness }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="py-[6rem]">
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            breakIndex={9}
            isBgWhite={true}
            isInCenter={true}
            subTitle={''}
            title={importantToBussiness?.heading}
          />
        </div>

        <div
          className={`${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} grid-cols-1 grid-cols-2 gap-[1rem] lg:grid`}
        >
          {importantToBussiness?.data?.map((item: any, idx: number) => {
            return (
              <div
                className={`rounded-[1rem] bg-[#F9F9F9] p-[2rem] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                }}
              >
                <div className="flex justify-between">
                  <Image src={item?.icon} width={60} height={60} alt="img" />
                  <h1 className='text-[#F1F1F1] text-[4rem]' >0{idx + 1}</h1>
                </div>
                <h3 className="mb-[0.5rem] mt-[2rem]">{item?.name}</h3>
                <div className="">
                  {item?.description?.map((dec: any) => {
                    return <p className="py-3">{dec}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ImportantToBussiness;
