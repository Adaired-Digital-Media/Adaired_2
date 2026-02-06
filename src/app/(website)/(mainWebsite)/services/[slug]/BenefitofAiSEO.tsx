import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import CustomSlider from './CustomSlider';
const BenefitofAiSEO = ({ benefitofAiSeo }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-[#FFF8F0] via-[#FFF8F0]/70 to-[#FFF8F0]/30 py-[3rem] lg:py-[6rem]"
    >
      <MaxWidthWrapper>
        <div
          className={`flex justify-between transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            title={benefitofAiSeo?.heading}
            className="w-[100%] lg:w-[35%]"
          />
          <div className="w-[100%] lg:w-[60%]">
            {benefitofAiSeo?.description?.map((item: any, idx: number) => {
              return (
                <p key={idx} className="py-2">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
      <CustomSlider data={benefitofAiSeo?.list} />
    </div>
  );
};

export default BenefitofAiSEO;
