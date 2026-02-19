import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import groth from '../../../../../../public/assets/icons/growth 2.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import DottedLine from '../../../../../../public/assets/Line 28.png';
import keyStatsImg from '../../../../../../public/assets/keyStatsImg.png';
import rocket from '../../../../../../public/assets/icons/rocket.svg';
import { MdOutlineArrowOutward } from 'react-icons/md';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

const ImportantToBussiness = ({ importantToBussiness }: any) => {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0);
  // const words = importantToBussiness?.heading?.split(' ') || [];

  return (
    <div>
      {importantToBussiness?.isVariant === '01' && (
        <div
          ref={ref}
          className="pb-[3rem] pt-[2rem] lg:pb-[4rem] lg:pt-[3rem]"
        >
          <MaxWidthWrapper>
            <div
              className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
            >
              <div className="flex flex-col justify-center lg:flex-row">
                <div
                  className={`${importantToBussiness?.description?.length > 0 ? 'w-full pr-[0%] lg:w-[50%]' : 'flex w-[100%] justify-center justify-items-center lg:w-[50%]'} pr-0 lg:pr-[6rem]`}
                >
                  <h2
                    className={`${importantToBussiness?.description?.length ? '' : 'text-center'}`}
                  >
                    {importantToBussiness?.heading}
                  </h2>

                  {/* <h2
                className={`${importantToBussiness?.description?.length ? '' : 'text-center'
                  }`}
              >
                {words.slice(0, 4).join(' ')}
                <br className="hidden md:block" />
                {words.slice(4).join(' ')}
              </h2> */}
                </div>

                <div
                  className={`${importantToBussiness?.description?.length > 0 ? 'w-full lg:w-[50%]' : 'w-[0%] bg-blue-100'}`}
                >
                  {importantToBussiness?.description?.map((item: any) => {
                    return <p className="my-3 ml-0 lg:ml-[10rem]">{item}</p>;
                  })}
                </div>
              </div>
            </div>

            <div
              className={`pt-[1rem] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} grid-cols-1 gap-[1rem] lg:grid lg:grid-cols-2`}
            >
              {importantToBussiness?.data?.map((item: any, idx: number) => {
                return (
                  <div
                    className={`relative my-[1rem] rounded-[1rem] bg-[#F9F9F9] p-[2rem] px-[2rem] ${item?.button ? 'pb-[4rem]' : 'pb-[2rem]'} pt-[2rem] transition-all duration-700 lg:my-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{
                      transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                    }}
                  >
                    <div className="relative flex items-center">
                      <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
                        <Image
                          src={item?.icon}
                          width={60}
                          height={60}
                          alt="img"
                        />
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
                      <p
                        onClick={() => setOpen(!open)}
                        className="absolute bottom-[2rem] left-[0rem] flex w-full cursor-pointer items-center justify-center gap-2 text-[#FB9100] lg:left-[2rem] lg:justify-start"
                      >
                        <span className="text-[16px]">{item.button}</span>
                        <MdOutlineArrowOutward />
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </MaxWidthWrapper>
        </div>
      )}

      {importantToBussiness?.isVariant === '02' && (
        <div
          ref={ref}
          className="bg-gradient-to-b from-[#F5F5F5] via-[#f8f8f8] to-[#fbfbfb] pb-[3rem] pt-[2rem] lg:pb-[5rem] lg:pt-[6rem]"
        >
          <MaxWidthWrapper className="flex justify-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
            >
              {/* <div className="flex flex-col justify-center lg:flex-row">
                <div
                  className={`${importantToBussiness?.description?.length > 0 ? 'w-full pr-[0%] lg:w-[50%]' : 'flex w-[100%] justify-center justify-items-center lg:w-[50%]'} pr-0 lg:pr-[6rem]`}
                >
                  <h2
                    className={`${importantToBussiness?.description?.length ? '' : 'text-center'}`}
                  >
                    {importantToBussiness?.heading}
                  </h2> */}

              {/* <h2
                        className={`${importantToBussiness?.description?.length ? '' : 'text-center'}`}
                      >
                         {words.slice(0, 4).join(' ')}
                          <br className="hidden md:block" />
                          {words.slice(4).join(' ')}
                      </h2> */}
              {/* </div>

                <div
                  className={`${importantToBussiness?.description?.length > 0 ? 'w-full lg:w-[50%]' : 'w-[0%] bg-blue-100'}`}
                >
                  {importantToBussiness?.description?.map((item: any) => {
                    return <p className="my-3 ml-0 lg:ml-[10rem]">{item}</p>;
                  })}
                </div>
              </div> */}
              <div className="">
                <Heading
                  isDecVarticle
                  title={importantToBussiness?.heading}
                  description={importantToBussiness?.description}
                  breakIndex={importantToBussiness?.breakIndex}
                  className="mx-auto pb-[4rem] lg:mx-0"
                />
              </div>

              <div
                className={`pt-[1rem] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} grid-cols-1 gap-[1rem] lg:grid lg:grid-cols-2`}
              >
                {importantToBussiness?.data?.map((item: any, idx: number) => {
                  return (
                    <div
                      className={`relative my-[1rem] rounded-[1rem] border border-[#FB9100]/20 bg-[#FFFFFF] p-[2rem] px-[2rem] pb-[4rem] pt-[2rem] transition-all duration-700 lg:mx-1 lg:my-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                      style={{
                        transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                      }}
                    >
                      <div className="relative flex items-center">
                        <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
                          <Image
                            src={item?.icon}
                            width={60}
                            height={60}
                            alt="img"
                          />
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
                        <p
                          onClick={() => setOpen(!open)}
                          className="absolute bottom-[2rem] left-[0rem] flex w-full cursor-pointer items-center justify-center gap-2 text-[#FB9100] lg:left-[2rem] lg:justify-start"
                        >
                          <span className="text-[16px]">{item.button}</span>
                          <MdOutlineArrowOutward />
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      )}
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default ImportantToBussiness;
