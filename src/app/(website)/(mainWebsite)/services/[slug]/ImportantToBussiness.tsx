import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import groth from '../../../../../../public/assets/icons/growth 2.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import DottedLine from '../../../../../../public/assets/Line 28.png';
import keyStatsImg from '../../../../../../public/assets/keyStatsImg.png';
import rocket from '../../../../../../public/assets/icons/rocket.svg';
import { MdOutlineArrowOutward } from 'react-icons/md';

const ImportantToBussiness = ({ importantToBussiness }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className="pb-[3rem] pt-[2rem] lg:pb-[4rem] lg:pt-[3rem]">
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
          className={`${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} grid-cols-1 gap-[1rem] lg:grid lg:grid-cols-2`}
        >
          {importantToBussiness?.data?.map((item: any, idx: number) => {
            return (
              <div
                className={`relative rounded-[1rem] bg-[#F9F9F9] p-[2rem] px-[2rem] pb-[4rem] pt-[2rem] transition-all duration-700 my-[1rem] lg:my-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                }}
              >
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
                    <Image src={item?.icon} width={60} height={60} alt="img" />
                  </div>

                  <h1 className="ml-auto text-[4rem] text-[#F1F1F1]">
                    0{idx + 1}
                  </h1>
                </div>

                <h3 className="mb-[0.5rem] mt-[2rem]">{item?.name}</h3>
                <div className="">
                  {item?.description?.map((dec: any) => {
                    return <p className="py-3">{dec}</p>;
                  })}
                </div>

                {item?.button && (
                  <a
                    href=""
                    className="absolute bottom-[2rem] left-[0rem] flex w-full items-center justify-center gap-2 text-[#FB9100] lg:left-[2rem] lg:justify-start"
                  >
                    <span>{item.button}</span>
                    <MdOutlineArrowOutward />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ImportantToBussiness;
