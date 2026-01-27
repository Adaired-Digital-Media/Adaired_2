'use client';
import PageBanner from '@web-components/PageBanner';
import TestimonialSlider from '@web-components/TestimonialSlider';
import BlogCards from '@web-components/BlogCard/BlogCards';
import CaseStudyCards from '@web-components/CaseStudyCards';
import { Suspense, useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { Base3URL, BaseURL } from '@/baseUrl';
import axios from 'axios';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import { LuCircleCheckBig } from 'react-icons/lu';
import Heading from '@/app/(website)/common/Heading';
import img from '../../../../../../public/assets/images/blogs/blog_01.png';
import { data } from './data';
import { IoCheckmarkCircle } from 'react-icons/io5';
import Certificate from '@/app/(website)/components/home/oldcertificate';

interface CaseStudy2 {
  title: string;
  description: string;
  image: string;
  bodyData: any[];
}

export interface CaseStudy {
  _id: string;
  slug: string;
  aboutProjectDescription?: string;
  cardImage?: string;
  caseStudyDescription?: string;
  colorScheme?: string;
  subHeading?: string;
  category?: any;
}

const CaseStudies = () => {
  const { slug } = useParams(); // ✅ SLUG HERE
  const {
    heading,
    label,
    span,
    description,
    projectInfo,
    aboutTheproject,
    projectInformation,
    solutionDescription,
  } = data ?? {};
  const [caseStudiesData, setCaseStudiesData] = useState<CaseStudy | null>(
    null
  );
  const getData = async () => {
    const res = await axios.get(
      `https://adaired-backend.onrender.com/api/v2/case-study/read?slug=${slug}`
    );
    console.log(res, 'res>>>>>>>>>>>isdfsdf');
    setCaseStudiesData(res?.data?.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const { aboutProjectDescription } = caseStudiesData ?? {};
  console.log(caseStudiesData?.aboutProjectDescription, 'caseStudiesData12');
  return (
    <>
      <PageBanner subTitle={'SEO'} title="CASE STUDY" />
      <Suspense fallback={<p>Loading feed...</p>}>
        <MaxWidthWrapper className="py-[3rem] lg:py-[4rem] xl:py-[6rem]">
          <div>
            <Heading
              isVarticle={true}
              breakIndex={3}
              subTitle={label}
              title={heading ?? ''}
              headingWidth={''}
              span={span}
            />
            <div className="grid grid-cols-2 gap-[2rem] pt-[1.5rem]">
              {img && (
                <div className="relative h-[30rem]">
                  <Image
                    src={img}
                    alt={'case study image'}
                    fill
                    className="mt-2 rounded-[20px]"
                  />
                </div>
              )}
              <div>
                {description?.map((para, idx) => {
                  const isLastIndex = description.length - 1 === idx;
                  return (
                    <div className="my-[1rem] flex gap-3">
                      <div
                        className={`mt-1 h-6 w-1.5 ${isLastIndex ? 'hidden' : 'block'} bg-[#1B5A96]`}
                      ></div>
                      <div>
                        <h3 className="">{para?.name}</h3>
                        <p className={`${isLastIndex && 'font-bold'}`}>
                          {isLastIndex
                            ? `"${para?.description}"`
                            : para?.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-[3rem]">
              <h2>Project Info</h2>
              <div className="flex gap-3 py-[1rem]">
                {projectInfo?.labels?.map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div className="my-auto h-5 w-0.5 bg-[#1B5A96]"></div>
                      <p className="font-semibold text-[#000000]">
                        {item?.lebel}
                      </p>
                      <p className="text-[#797979]">{item?.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="py-[1rem]">
                {projectInfo?.details?.map((item, idx) => (
                  <div key={idx} className="my-4 space-y-4">
                    {/* Description */}
                    <p>{item?.description}</p>

                    {/* TEXT LIST (vertical) */}
                    <div className="space-y-2 pt-[1rem]">
                      {item?.list
                        ?.filter((x: any) => x.type === 'text')
                        .map((x: any, i: number) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-[#797979]"
                          >
                            <IoCheckmarkCircle
                              fontSize={22}
                              className="text-[#00BE29]"
                            />
                            <p>{x?.name}</p>
                          </div>
                        ))}
                    </div>
                    {/* IMAGE LIST (horizontal) */}
                    <div className="grid grid-cols-3 gap-4 pt-[1rem]">
                      {item?.list
                        ?.filter((x: any) => x.type === 'image')
                        .map((x: any, i: number) => (
                          <Image
                            key={i}
                            src={x?.image}
                            width={485}
                            height={263}
                            alt="img"
                            className="rounded-[20px]"
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-[3rem]">
              <h2>About the Project</h2>
              <p className="flex">{aboutTheproject?.description}</p>
              <div className="flex gap-[2rem] pt-[4rem]">
                {aboutTheproject?.details?.map((item) => {
                  return (
                    <div className="relative rounded-[20px] bg-[#F8FBFF] px-[2rem] pb-[2rem] pt-[3rem]">
                      <h3 className="absolute left-[2rem] top-[-1rem] rounded-full bg-[#1B5A96] px-[2rem] py-[0.25rem] text-[#FFFFFF]">
                        {item?.label}
                      </h3>
                      <div className="text-[#797979]">
                        {item?.list?.map((x) => {
                          return (
                            <div className="flex gap-2 py-1">
                              <span className="my-auto">
                                <IoCheckmarkCircle
                                  fontSize={22}
                                  className={'text-[#00BE29]'}
                                />
                              </span>
                              <p> {x}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-[3rem]">
              <h2 className="text-center">Project Informations</h2>
              <div className="grid grid-cols-3 gap-[4rem] pt-[3rem]">
                {projectInformation?.data?.map((item) => {
                  return (
                    <div className="bg-[">
                      <span>
                        <IoCheckmarkCircle
                          size={55}
                          className="text-[#000000]"
                        />
                      </span>
                      <h3 className="boder-[#000000] border-b pb-4">
                        {item?.label}
                      </h3>
                      <p className="pt-3">{item?.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-[3rem]">
              {projectInformation?.details?.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-[4rem] py-[3rem] ${
                    index % 2 !== 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex w-1/2 justify-center justify-items-center rounded-[20px] bg-[#F4F6F9] py-[2rem]">
                    <Image
                      src={item?.image}
                      width={644}
                      height={380}
                      alt="project"
                      className="rounded-[20px]"
                    />
                  </div>

                  <div className="w-1/2 space-y-3 divide-y-2">
                    <h3 className="">{item?.heading}</h3>
                    <p className="pt-5">{item?.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2>Solutions:</h2>
              <p>{solutionDescription}</p>
            </div>
            {/* {caseStudies?.bodyData?.map((item: any, index: number) => (
              <div key={index} className="mt-6">
                {item?.heading && (
                  <h2 className="mb-2 text-xl font-semibold">{item.heading}</h2>
                )}

                {item?.description && <p>{item.description}</p>}
                {item?.lists &&
                  item?.lists?.map((item: any) => {
                    return (
                      <div className="flex gap-2 space-y-3">
                        <LuCircleCheckBig
                          size={25}
                          className="my-auto text-[#FB9100]"
                        />
                        <p className="my-auto">{item}</p>
                      </div>
                    );
                  })}
              </div>
            ))} */}
          </div>
        </MaxWidthWrapper>
      </Suspense>
    </>
  );
};

export default CaseStudies;
