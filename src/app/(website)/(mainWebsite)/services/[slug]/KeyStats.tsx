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
  const [activeTab, setActiveTab] = useState(0);
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
          <div className="grid grid-cols-1 items-stretch gap-5 pt-[3rem] lg:grid-cols-[45%_50%] lg:gap-[6rem]">
            <div className="relative aspect-[4/3] lg:aspect-auto md:h-full md:w-full">
              <Image src={keyStatsImg} alt="img" fill className="object-fill" />
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
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[6rem]">
            <div className="mt-7 rounded-[20px]">
              {keyStats?.list?.map((item: any, index: any) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveTab(index)}
                  onMouseLeave={() => setActiveTab(0)}
                  className={`group flex cursor-pointer flex-col p-4 transition-all duration-300 ease-in-out lg:w-[49rem] lg:p-[2rem] ${
                    activeTab === index
                      ? 'border-r-[0.5rem] border-[#FB9100] bg-[#FB9100]/20'
                      : 'bg-[#FFF8ED]'
                  }`}
                >
                  <div
                    className={`flex items-start gap-8 transition-all duration-700 ease-in-out lg:items-center lg:gap-16 lg:text-left ${
                      isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 280}ms`,
                    }}
                  >
                    <h2 className="transition-all duration-300 ease-in-out">
                      {`0${index + 1}`}
                    </h2>

                    <p
                      className={`transition-all duration-300 ease-in-out lg:text-left ${
                        activeTab === index ? 'font-semibold' : ''
                      }`}
                    >
                      {item.desctioption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="group relative flex items-center justify-center rounded-[20px] bg-[#FFF8ED]">
              <div
                className={`flex w-[100%] items-center justify-center transition-all delay-200 duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-0 lg:translate-x-16'}`}
              >
                {/* <Image
                  src={keyStats?.img}
                  alt="img"
                  fill
                  className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                /> */}

                <Image
                  src={keyStats?.img}
                  width={599}
                  height={483}
                  alt="img"
                  className={`h-[10rem] w-[15rem] transition-opacity transition-transform duration-700 ease-in-out md:h-[20rem] md:w-[32rem] lg:h-[18rem] lg:w-[24rem] xl:h-[30.188rem] xl:w-[37.438rem] 1366:h-[23rem] 1366:w-[28rem] 1400:h-[25rem] 1400:w-[30rem] 1600:h-[26rem] 1600:w-[32rem] 1680:w-[35rem] 3xl:h-[30.188rem] 3xl:w-[37.438rem]`}
                />
              </div>

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

        {keyStats?.code === '04' && (
          <div
            className={`grid grid-cols-1 gap-4 py-[3rem] transition-all duration-700 sm:grid-cols-2 lg:grid-cols-4 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {keyStats?.list?.map((item: any, idx: number) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-[1rem] border border-[#F28F17]/20 p-5 text-center transition-all duration-700 lg:items-start lg:text-left"
                style={{
                  transitionDelay: `${idx * 200}ms`,
                }}
              >
                <h2 className="F28F17 mx-auto w-fit rounded-xl border border-[#F28F17]/10 bg-[#FFEACD] px-3 py-1 font-normal text-[#FB9100] lg:mx-0">
                  {`0${idx + 1}`}
                </h2>

                <h3 className="pt-14">{item?.description}</h3>
              </div>
            ))}
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default KeyStats;
