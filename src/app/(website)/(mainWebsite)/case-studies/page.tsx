'use client';
import PageBanner from '@web-components/PageBanner';
import { getBlogsData, ProcessSection } from '../about/page';
import TestimonialSlider from '@web-components/TestimonialSlider';
import BlogCards from '@web-components/BlogCard/BlogCards';
import CaseStudyCards from '@web-components/CaseStudyCards';
import { Suspense, useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { Base3URL, BaseURL } from '@/baseUrl';
import Blogs from '../../components/home/Blogs';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import axios from 'axios';
import Image from 'next/image';
import SaveAndCancel from '../../common/SaveAndCancel';
import { useRouter } from 'next/navigation';
import Banner from '../../common/Banner/Banner';
import Heading from '../../common/Heading';
import CaseStudy from '../../../(website)/components/Card/CaseStudy';
import CaseStudyImg from '../../../../../public/assets/images/case_staudy/case_study.webp';
import CaseStudyImg_2 from '../../../../../public/assets/images/case_staudy/case_study_2.webp';
import CaseStudyImg_3 from '../../../../../public/assets/images/case_staudy/case_study_3.webp';

//hello
const CaseStudies = () => {
  const [isActiveTab, setIsActiveTab] = useState(0);
  const router = useRouter();
  const [caseStudies, setCaseStudies] = useState([0]);
  const getData = async () => {
    const res = await axios.get(`${BaseURL}/case-study/read`);
    console.log(res?.data?.data, 'res>>>>>>>>>>>>>');
    setCaseStudies(res?.data?.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const ApiData = [
    {
      image: CaseStudyImg,
      caseStudyName: 'Green Choice Carpet Cleaning',
      slug: 'green-choice-carpet-cleaning',
    },
    {
      image: CaseStudyImg_2,
      caseStudyName: 'AMPT Calgary Electricians',
      slug: 'ampt-calgary-electricians',
    },
    {
      image: CaseStudyImg_3,
      caseStudyName: 'Bayside Heating and Cooling',
      slug: 'bayside-heating-and-cooling',
    },
  ];

  const data = [
    'All',
    'SEO ( Search Engine Optimization )',
    'PPC ( Pay-Per-Click )',
    'Website Development',
    'App Development',
  ];
  const COLORS = [
    { bg: '#FFF4F3', btn: '#FFF4F3', hover: '#FFB3AD' },
    { bg: '#D7EBFF', btn: '#D7EBFF', hover: '#3B82F6' },
    { bg: '#E1F2E2', btn: '#048C0B', hover: '#036B08' },
  ];

  return (
    <>
      {/* <PageBanner title="Case Studies" /> */}
      <PageBanner subTitle={'LATEST'} title={'CASE STUDIES'} />
      <Suspense fallback={<p>Loading feed...</p>}>
        <MaxWidthWrapper className="py-[3rem] lg:py-[4rem] xl:py-[6rem]">
          <div>
            <Heading
              isVarticle={true}
              breakIndex={3}
              subTitle={'CASE STUDIES'}
              title={`Digital Agency That Turns Businesses Into Brands`}
            />
          </div>
          <div className="mb-[4rem] mt-[1rem] flex gap-[1rem] rounded-full bg-[#EDF6FF]">
            {data?.map((item, idx) => (
              <p
                key={idx}
                onClick={() => setIsActiveTab(idx)}
                className={`my-auto cursor-pointer rounded-full px-[3rem] py-[0.8rem] transition-all duration-300 ease-in-out ${
                  isActiveTab === idx
                    ? 'scale-105 bg-[#1B5A96] text-white'
                    : 'hover:bg-[#1B5A96] hover:text-white'
                }`}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-[2rem]">
            {ApiData.map((caseStudy: any, index) => (
              <div>
                <CaseStudy
                  image={caseStudy?.image}
                  labels={['SEO', 'PPC']}
                  title={caseStudy?.caseStudyName ?? ''}
                  breakIndex={3}
                  link={caseStudy?.slug}
                  bgColor={
                    (index === 0 && '#FFF4F3') ||
                    (index === 1 && '#D7EBFF') ||
                    (index === 2 && '#E1F2E2')
                  }
                  buttonColor={
                    (index === 0 && '#FFF4F3') ||
                    (index === 1 && '#D7EBFF') ||
                    (index === 2 && '#048C0B')
                  }
                />
              </div>
              // <div
              //   key={index}
              //   className={`my-[2rem] flex flex-col gap-[4rem] rounded-[0.35rem] border-[0.71px] border-[#000000]/5 px-[4rem] py-[3rem] md:flex-row ${
              //     index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              //   }`}
              // >
              //   {/* LEFT / TEXT */}
              //   <div className="relative w-full md:w-1/2">
              //     <span className="rounded-[0.25rem] bg-green-500 px-[1rem] py-[0.25rem] text-xxs text-[#ffffff]">
              //       Summry
              //     </span>
              //     <h2 className="mb-3 font-medium">About the project</h2>
              //     <p>{caseStudy.projectDescription}</p>
              //     <SaveAndCancel
              //       name={'View Case Study'}
              //       isIcon={true}
              //       handleClick={() =>
              //         router.push(`/case-studies/${caseStudy?.slug}`)
              //       }
              //       buttonWidth={'!w-[16.5rem]'}
              //       className="absolute bottom-10 left-0"
              //     />
              //   </div>

              //   {/* RIGHT / IMAGE */}
              //   <div className="w-full md:w-1/2">
              //     <h2 className="mb-3 text-2xl font-bold leading-[3rem]">
              //       {caseStudy.title}
              //     </h2>
              //     <p>{caseStudy.description}</p>
              //     <div className="relative h-[20rem] w-full">
              //       <Image
              //         src={caseStudy.image}
              //         alt="img"
              //         fill
              //         className="mt-2 object-contain"
              //       />
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </Suspense>
      {/* <ProcessSection /> */}
      <TestimonialSlider />
      {/* <BlogCards blogs={blogs} /> */}
      <Blogs />
    </>
  );
};

export default CaseStudies;
