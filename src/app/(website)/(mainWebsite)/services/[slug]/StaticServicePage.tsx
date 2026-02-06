'use client';
import React from 'react';
import Banner from './Banner';
import KeyStats from './KeyStats';
import WhatAreAISEO from './WhatAreAISEO';
import NeedOfAISEO from './NeedOfAISEO';
import FAQ from '@/app/(website)/components/home/FAQ';
import BenefitofAiSEO from './BenefitofAiSEO';
import AISEOResult from './AISEOResult';
import NotSeeingResults from './NotSeeingResults';
import AdairedHelp from './AdairedHelp';
import IndustryLeaders from './IndustryLeaders';
import Stopstruggling from './Stopstruggling';
import LeadingTools from './LeadingTools';
import WhatMakesAdaired from './WhatMakesAdaired';
import OurProcess from './OurProcess';
import AISEOSolutions from './AISEOSolutions';
import DominateAI from './DominateAI';
import { SERVICES_DATA } from './data';
import { useParams } from 'next/navigation';
import NotFound from '@/app/not-found';
import ReadyToStart from './ReadyToStart';
import ImportantToBussiness from './ImportantToBussiness';
export type ServiceSlug = keyof typeof SERVICES_DATA;

const StaticServicePage = ({ serviceData }: any) => {
  const params = useParams();
  const slug = params.slug as ServiceSlug;
  //   const serviceData = SERVICES_DATA?.[slug];
  //   if (!serviceData) {
  //     return <NotFound />;
  //   }
  return (
    <div>
      <Banner banner={serviceData?.banner} />
      {serviceData.keyStats?.isVisible && (
        <KeyStats keyStats={serviceData.keyStats} />
      )}
      {serviceData.whatareservice?.isVisible && (
        <WhatAreAISEO whatareaiseo={serviceData.whatareservice} />
      )}
      {serviceData?.needofservice?.isVisible && (
        <NeedOfAISEO needOfService={serviceData?.needofservice} />
      )}
      {serviceData?.importantToBussiness?.isVisible && (
        <ImportantToBussiness
          importantToBussiness={serviceData?.importantToBussiness}
        />
      )}
      {serviceData.benefitofAiSeo?.isVisible && (
        <BenefitofAiSEO benefitofAiSeo={serviceData.benefitofAiSeo} />
      )}
      {serviceData.serviceResult?.isVisible && (
        <AISEOResult aiseoResult={serviceData.serviceResult} />
      )}
      {serviceData?.notSeeingResult?.isVisible && (
        <NotSeeingResults notSeeingResult={serviceData?.notSeeingResult} />
      )}
      {serviceData.adairedHelp?.isVisible && (
        <AdairedHelp adairedHelp={serviceData.adairedHelp} />
      )}
      {serviceData?.industryLeaders?.isVisible ? (
        <IndustryLeaders />
      ) : (
        <LeadingTools leadingTools={serviceData?.leadingTools} />
      )}

      {serviceData?.whatIncluded?.isVisible && (
        <AISEOSolutions whatIncluded={serviceData?.whatIncluded} />
      )}
      {serviceData?.stopStruggling?.isVisible && (
        <Stopstruggling stopStruggling={serviceData?.stopStruggling} />
      )}

      {serviceData?.needofservice?.isVisible && (
        <LeadingTools leadingTools={serviceData?.leadingTools} />
      )}
      {serviceData.ourProcess && (
        <OurProcess ourProcess={serviceData.ourProcess} />
      )}
      {serviceData?.whatMkeDeferent?.isVisible && (
        <WhatMakesAdaired whatMkeDeferent={serviceData?.whatMkeDeferent} />
      )}
      {serviceData?.leadingToolsForPerformence?.isVisible && (
        <LeadingTools leadingTools={serviceData?.leadingToolsForPerformence} />
      )}
      <DominateAI getplan={serviceData?.getplan} />
      {serviceData.faqData && <FAQ faqs={serviceData.faqData} />}
      <ReadyToStart />
    </div>
  );
};

export default StaticServicePage;
