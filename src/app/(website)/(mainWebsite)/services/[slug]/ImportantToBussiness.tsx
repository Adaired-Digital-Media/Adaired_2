import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import { MdOutlineArrowOutward } from 'react-icons/md';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';
import SocialMediaCheck from '../../../../../../public/assets/images/PPCimg/arrowOrange.png';

const ImportantToBussiness = ({ importantToBussiness }: any) => {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0);

  return (
    <div>
      {importantToBussiness?.isVariant === '01' && (
        <div
          ref={ref}
          className={`pb-[3rem] bg-[${importantToBussiness?.bgColor || '#FFFFFF'}] pt-[2rem] lg:pb-[4rem] lg:pt-[3rem]`}
        >
          <MaxWidthWrapper>
            <div
              className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
            >
              <Heading
                isDecVarticle
                isInCenter={importantToBussiness?.isInCenter}
                isBgWhite={importantToBussiness?.isInCenter && true}
                title={importantToBussiness?.heading}
                description={importantToBussiness?.description}
                breakIndex={importantToBussiness?.breakIndex}
              />
            </div>

            <div
              className={`pt-[1.5rem] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} grid-cols-1 gap-[1rem] lg:grid lg:grid-cols-2`}
            >
              {importantToBussiness?.data?.map((item: any, idx: number) => {
                return (
                  <div
                    className={`relative my-[1rem] rounded-[1rem] border ${importantToBussiness?.borderColor} bg-[${importantToBussiness?.cardColor || '#FFFFFF'}] p-[2rem] px-[2rem] ${item?.button ? 'pb-[4rem]' : 'pb-[2rem]'} pt-[2rem] transition-all duration-700 lg:my-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{
                      // borderColor: importantToBussiness?.borderColor
                      //   ? `${importantToBussiness.borderColor}33` // 20% opacity in HEX
                      //   : '#FFFFFF1F',
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

                    {/* <div className="">
                      {item?.description?.map((dec: any) => {
                        return <p className="py-3">{dec}</p>;
                      })}
                    </div> */}

                    <div>
                      {item?.description?.map((dec: any, index: number) => {

                        if (typeof dec === "string") {
                          return (
                            <p key={index} className="py-3">
                              {dec}
                            </p>
                          );
                        }

                        if (typeof dec === "object") {
                          return (
                            <div key={index} className="py-3">
                              {dec?.desctioption && (
                                <p className="pb-2 font-semibold">
                                  {dec.desctioption}
                                </p>
                              )}

                              {dec?.list && (
                                <ul className="space-y-3">
                                  {dec.list.map((listItem: any, i: number) => (
                                    <li key={i}>
                                      {listItem?.des?.map((d: string, di: number) => (
                                        <div
                                          key={di}
                                          className="flex items-start gap-3"
                                        >
                                          <Image
                                            src={SocialMediaCheck}
                                            width={17}
                                            height={23}
                                            alt="check"
                                            className="shrink-0 mt-1 w-[14px] h-auto sm:w-[17px]"
                                          />
                                          <p className='text-left'>{d}</p>
                                        </div>
                                      ))}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        }

                        return null;
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
          className={`${importantToBussiness?.bgImage} pb-[3rem] pt-[2rem] lg:pb-[5rem] lg:pt-[6rem]`}
        >
          <MaxWidthWrapper className="flex justify-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
            >
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
