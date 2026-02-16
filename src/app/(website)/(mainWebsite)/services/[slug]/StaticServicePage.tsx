'use client';

import React from 'react';
import NotFound from '@/app/not-found';

import Banner from './Banner';
import KeyStats from './KeyStats';
import WhatAreService from './WhatAreService';
import NeedOfAdaired from './NeedOfAdaired';
import BenefitofAiSEO from './BenefitofAiSEO';
import AdairedServiceResult from './AdairedServiceResult';
import NotSeeingResults from './NotSeeingResults';
import AdairedHelp from './AdairedHelp';
import BookAConsultation from './BookAConsultation';
import IndustryLeaders from './IndustryLeaders';
import Stopstruggling from './Stopstruggling';
import LeadingTools from './LeadingTools';
import WhatMakesAdaired from './WhatMakesAdaired';
import OurProcess from './OurProcess';
import WhatIncluded from './WhatIncluded';
import DominateAI from './DominateAI';
import ReadyToStart from './ReadyToStart';
import ImportantToBussiness from './ImportantToBussiness';
import AreYouTired from './AreYouTired';
import FAQ from '@/app/(website)/components/home/FAQ';

import { SERVICES_DATA } from './data';
import WhatMissing from './WhatMissing';

export type ServiceSlug = keyof typeof SERVICES_DATA;

export type SectionKey =
  | 'banner'
  | 'keyStats'
  | 'areYouTired'
  | 'whatareservice'
  | 'needofservice'
  | 'needofservice2'
  | 'importantToBussiness'
  | 'benefitofAiSeo'
  | 'serviceResult'
  | 'notSeeingResult'
  | 'adairedHelp'
  | 'buildlinks'
  | 'leadingTools'
  | 'industryOrLeadingTools'
  | 'whatIncluded'
  | 'ourProcess'
  | 'whatMissing'
  | 'stopStruggling'
  | 'whatMkeDeferent'
  | 'leadingToolsForPerformence'
  | 'getplan'
  | 'faqData'
  | 'readyToStart';

type SectionRenderer = (serviceData: any) => JSX.Element | null;

const sectionRenderer: Record<SectionKey, SectionRenderer> = {
  banner: (serviceData) =>
    serviceData.banner?.isVisible ? (
      <Banner banner={serviceData.banner} />
    ) : null,

  keyStats: (serviceData) =>
    serviceData.keyStats?.isVisible ? (
      <KeyStats keyStats={serviceData.keyStats} />
    ) : null,

  areYouTired: () => <AreYouTired />,

  whatareservice: (serviceData) =>
    serviceData.whatareservice?.isVisible ? (
      <WhatAreService whatareaiseo={serviceData.whatareservice} />
    ) : null,

  needofservice: (serviceData) =>
    serviceData.needofservice?.isVisible ? (
      <NeedOfAdaired needOfService={serviceData.needofservice} />
    ) : null,

  needofservice2: (serviceData) =>
    serviceData.needofservice2?.isVisible ? (
      <NeedOfAdaired needOfService={serviceData.needofservice2} />
    ) : null,

  importantToBussiness: (serviceData) =>
    serviceData.importantToBussiness?.isVisible ? (
      <ImportantToBussiness
        importantToBussiness={serviceData.importantToBussiness}
      />
    ) : null,

  benefitofAiSeo: (serviceData) =>
    serviceData.benefitofAiSeo?.isVisible ? (
      <BenefitofAiSEO benefitofAiSeo={serviceData.benefitofAiSeo} />
    ) : null,

  buildlinks: (serviceData) =>
    serviceData.buildlinks?.isVisible ? (
      <BookAConsultation buildlinks={serviceData.buildlinks} />
    ) : null,

  serviceResult: (serviceData) =>
    serviceData.serviceResult?.isVisible ? (
      <AdairedServiceResult aiseoResult={serviceData.serviceResult} />
    ) : null,

  notSeeingResult: (serviceData) =>
    serviceData.notSeeingResult?.isVisible ? (
      <NotSeeingResults notSeeingResult={serviceData.notSeeingResult} />
    ) : null,

  adairedHelp: (serviceData) =>
    serviceData.adairedHelp?.isVisible ? (
      <AdairedHelp adairedHelp={serviceData.adairedHelp} />
    ) : null,

  industryOrLeadingTools: (serviceData) =>
    serviceData.industryLeaders?.isVisible ? <IndustryLeaders /> : null,

  leadingTools: (serviceData) =>
    serviceData.leadingTools?.isVisible ? (
      <LeadingTools leadingTools={serviceData?.leadingTools} />
    ) : null,

  whatIncluded: (serviceData) =>
    serviceData.whatIncluded?.isVisible ? (
      <WhatIncluded whatIncluded={serviceData.whatIncluded} />
    ) : null,

  ourProcess: (serviceData) =>
    serviceData.ourProcess?.isVisible ? (
      <OurProcess ourProcess={serviceData.ourProcess} />
    ) : null,

  whatMissing: (serviceData) =>
    serviceData.whatMissing?.isVisible ? (
      <WhatMissing whatMissing={serviceData.whatMissing} />
    ) : null,

  stopStruggling: (serviceData) =>
    serviceData.stopStruggling?.isVisible ? (
      <Stopstruggling stopStruggling={serviceData.stopStruggling} />
    ) : null,

  whatMkeDeferent: (serviceData) =>
    serviceData.whatMkeDeferent?.isVisible ? (
      <WhatMakesAdaired whatMkeDeferent={serviceData.whatMkeDeferent} />
    ) : null,

  leadingToolsForPerformence: (serviceData) =>
    serviceData.leadingToolsForPerformence?.isVisible ? (
      <LeadingTools leadingTools={serviceData.leadingToolsForPerformence} />
    ) : null,

  getplan: (serviceData) =>
    serviceData.getplan?.isVisible ? (
      <DominateAI getplan={serviceData.getplan} />
    ) : null,

  faqData: (serviceData) =>
    serviceData.faqData?.isVisible ? <FAQ faqs={serviceData.faqData} /> : null,

  readyToStart: () => <ReadyToStart />,
};

type StaticServicePageProps = {
  serviceData: (typeof SERVICES_DATA)[keyof typeof SERVICES_DATA];
};
const StaticServicePage = ({ serviceData }: StaticServicePageProps) => {
  if (!serviceData) {
    return <NotFound />;
  }

  return (
    <div>
      {serviceData.sectionsOrder.map((sectionKey, index) => (
        <React.Fragment key={`${sectionKey}-${index}`}>
          {sectionRenderer[sectionKey](serviceData)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StaticServicePage;
