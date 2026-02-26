'use client';
import React, { useRef, useState } from 'react';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import Image from 'next/image';
import { useScrollTabs } from '@/@core/hooks/useScrollTabs';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

import SocialMediaCheck from '../../../../../../public/assets/images/PPCimg/arrowOrange.png';

const OurProcess2 = ({ ourProcess }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const { activeTab, setActiveTab, isMobile, showMobileTab } = useScrollTabs({
    items: ourProcess?.services,
    sectionRefs,
    wrapperRef,
  });

  return (
    <section
      ref={ref}
      id="services"
      className="bg-[#F5F5F599] py-[3rem] lg:py-[4rem]"
    >
      <MaxWidthWrapper>
        {/* ❗ IMPORTANT: relative + NO overflow */}
        <div>
          <Heading
            isLabel={true}
            subTitle={'Our Process'}
            breakIndex={ourProcess?.breakIndex}
            title={ourProcess?.title}
            isInCenter={ourProcess?.isInCenter}
            isBgWhite={ourProcess?.isInCenter && true}
          />
        </div>
        <div
          ref={wrapperRef}
          className="relative flex justify-between gap-[3rem]"
        >
          {/* ================= LEFT (STICKY) ================= */}
          <div className="relative mt-[1rem] flex items-center justify-center">
            <div className="relative h-[520px] w-[520px]">
              <svg width="520" height="520" viewBox="0 0 520 520">
                {ourProcess.services.map((service: any, idx: number) => {
                  const total = ourProcess.services.length;
                  const center = 260;

                  const outerR = 240;
                  const innerR = 150;
                  const thickness = outerR - innerR;
                  const capRadius = thickness / 2;

                  const fullAngle = (2 * Math.PI) / total;
                  const gap = 0.06;

                  const start = idx * fullAngle - Math.PI / 2 + gap / 2;
                  const end = start + fullAngle - gap;

                  const largeArc = fullAngle > Math.PI ? 1 : 0;

                  const sx = center + outerR * Math.cos(start);
                  const sy = center + outerR * Math.sin(start);

                  const ex = center + outerR * Math.cos(end);
                  const ey = center + outerR * Math.sin(end);

                  const isx = center + innerR * Math.cos(start);
                  const isy = center + innerR * Math.sin(start);

                  const iex = center + innerR * Math.cos(end);
                  const iey = center + innerR * Math.sin(end);

                  return (
                    <path
                      key={idx}
                      d={`
          M ${sx} ${sy}
          A ${outerR} ${outerR} 0 ${largeArc} 1 ${ex} ${ey}
          A ${capRadius} ${capRadius} 0 0 1 ${iex} ${iey}
          A ${innerR} ${innerR} 0 ${largeArc} 0 ${isx} ${isy}
          A ${capRadius} ${capRadius} 0 0 1 ${sx} ${sy}
          Z
        `}
                      fill={activeTab === idx ? '#FB9100' : '#FBEBD5'}
                      stroke="#FFFFFF"
                      // strokeWidth="8"
                      onClick={() => setActiveTab(idx)}
                      className="cursor-pointer transition-all duration-500"
                    />
                  );
                })}
              </svg>

              {/* Inner background circle */}

              {/* ICONS */}
              {ourProcess.services.map((service: any, idx: number) => {
                const total = ourProcess.services.length;
                const angle = (2 * Math.PI) / total;
                const mid = idx * angle + angle / 2 - Math.PI / 2;

                const center = 260;
                const r = 185;

                const x = center + r * Math.cos(mid);
                const y = center + r * Math.sin(mid);

                return (
                  <div
                    key={idx}
                    className="absolute"
                    style={{
                      left: x,
                      top: y,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={28}
                      height={28}
                      className={
                        activeTab === idx ? 'brightness-0 invert' : 'opacity-60'
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* ================= RIGHT (SCROLL CONTENT) ================= */}
          <div className="my-auto w-full lg:w-[55%]">
            {ourProcess.services[activeTab] && (
              <div
                key={activeTab}
                className="transform rounded-[20px] bg-[#FFFFFF] p-[2.5rem] transition-all duration-500"
              >
                <h3 className="mb-3 font-semibold uppercase text-[#FB9100]">
                  Step {activeTab + 1}: {ourProcess.services[activeTab].title}
                </h3>

                {ourProcess.services[activeTab].description.map(
                  (item: any, i: number) => {
                    if (typeof item === 'string') {
                      return (
                        <p key={i} className="my-4">
                          {item}
                        </p>
                      );
                    }

                    if (item.list) {
                      return item.list.map((listItem: any, j: number) => (
                        <div
                          key={`${i}-${j}`}
                          className="my-2 flex items-start gap-3 sm:gap-4"
                        >
                          <Image
                            src={SocialMediaCheck}
                            width={17}
                            height={23}
                            alt="arrow"
                            className="mt-1 h-auto w-[14px] shrink-0 sm:w-[17px]"
                          />

                          <p className="text-left">
                            {listItem.des || listItem.description}
                          </p>
                        </div>
                      ));
                    }

                    return null;
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default OurProcess2;
