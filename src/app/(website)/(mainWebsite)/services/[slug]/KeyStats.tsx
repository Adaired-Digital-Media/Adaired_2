import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import groth from '../../../../../../public/assets/icons/growth 2.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import DottedLine from '../../../../../../public/assets/Line 28.png';
import keyStatsImg from '../../../../../../public/assets/keyStatsImg.png';
import rocket from '../../../../../../public/assets/icons/rocket.svg';

const KeyStats = ({ keyStats }: any) => {
  const [activetab, setActiveTab] = useState(null);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="py-[3rem] lg:py-[4rem]">
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            breakIndex={6}
            isBgWhite={true}
            isInCenter={true}
            subTitle={''}
            title={keyStats?.heading}
          />
        </div>
        {keyStats?.code === '01' && (
          <div>
            <div
              className={`${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} grid grid-cols-1 gap-[1rem] lg:grid-cols-3`}
            >
              {keyStats?.list?.slice(0, 3).map((item: any, idx: number) => {
                return (
                  <div
                    className={`flex flex-col items-center rounded-[1rem] bg-[#F9F9F9] p-[2rem] transition-all duration-700 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{
                      transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                    }}
                  >
                    <Image src={groth} width={50} height={50} alt="img" />
                    <p className="pt-[2rem]">{item?.desctioption}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-[1rem] grid grid-cols-1 gap-[1rem] lg:grid-cols-2">
              {keyStats?.list?.slice(4, 6).map((item: any, idx: number) => {
                return (
                  <div
                    className={`flex flex-col items-center rounded-[1rem] bg-[#F9F9F9] p-[2rem] transition-all duration-700 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
                    style={{
                      transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                    }}
                  >
                    <Image src={groth} width={50} height={50} alt="img" />
                    <p className="pt-[2rem]">{item?.desctioption}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {keyStats?.code === '02' && (
          <div className="grid grid-cols-1 items-start justify-items-center gap-5 pt-[3rem] md:grid-cols-[45%_50%] lg:gap-16">
            <div className="relative h-[450px] w-full md:h-[600px] lg:h-[700px]">
              <Image
                src={keyStatsImg}
                alt="img"
                fill
                className="object-contain"
              />

              <Image
                src={rocket}
                width={115}
                height={123}
                alt="rocket"
                className="left-[0.5 rem] absolute top-[-1rem]"
              />
            </div>

            <div className="mt-7 space-y-4">
              {keyStats?.list?.map((item: any, index: any) => (
                <div key={index} className="flex flex-col">
                  {index !== 0 && (
                    <Image
                      src={DottedLine}
                      width={891}
                      height={0}
                      alt="dotted-line"
                    />
                  )}

                  <div className="flex flex-col items-center gap-8 py-4 md:flex-row lg:flex-row lg:gap-16">
                    <div className="mx-2.5 flex w-[50px] justify-center">
                      <span className="text-4xl font-normal text-[#FB9100] md:text-4xl">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="text-sm md:text-base">{item.desctioption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {keyStats?.code === '03' && (
          <div className="relative grid grid-cols-1 gap-[6rem] lg:grid-cols-2">
            <div className="mt-7 rounded-[20px]">
              {keyStats?.list?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="group flex w-[770px] cursor-pointer flex-col bg-[#FFF8ED] p-[2rem] transition-all duration-300 ease-in-out hover:border-r-[0.5rem] hover:border-[#FB9100] hover:bg-[#FB9100]/20"
                >
                  <div className="flex items-center gap-8 lg:gap-16 lg:text-left">
                    <h2 className="transition-all duration-300 ease-in-out">
                      {`0${index + 1}`}
                    </h2>

                    <p className="transition-all duration-300 ease-in-out group-hover:font-semibold lg:text-left">
                      {item.desctioption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-[20px] bg-[#FFF8ED]">
              <Image
                src={keyStats?.img}
                alt="img"
                fill
                className="object-contain"
              />

              {keyStats?.code === '02' && (
                <Image
                  src={rocket}
                  width={115}
                  height={123}
                  alt="rocket"
                  className="left-[0.5 rem] absolute top-[-1rem]"
                />
              )}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default KeyStats;
