'use client';
import React, { useRef, useState } from 'react';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import Image from 'next/image';
import { useScrollTabs } from '@/@core/hooks/useScrollTabs';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import SocialMediaCheck from '../../../../../../public/assets/images/PPCimg/arrowOrange.png';

const OurProcess = ({ ourProcess }: any) => {
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
        <div ref={wrapperRef} className="relative flex gap-[3rem]">
          {/* ================= LEFT (STICKY) ================= */}
          <div
            className={`hidden w-[40%] transition-all duration-1000 lg:block ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            {/* Sticky wrapper */}
            <div className="sticky top-[8rem]">
              <Heading
                isLabel
                subTitle={'Our Process'}
                title={ourProcess?.title}
              />

              {/* CIRCLE */}
              <div className="relative mt-[4rem] flex h-[520px] w-[520px] items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#00000033]" />

                <div
                  className={`absolute inset-[70px] flex flex-col items-center justify-center rounded-full transition-all ${activeTab === ourProcess.services.length - 1
                      ? 'bg-[#FB9100] text-white'
                      : 'bg-[#FFF4E8]'
                    }`}
                >
                  <p
                    className={`text-sm tracking-widest ${activeTab === ourProcess.services.length - 1 ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}
                  >
                    STEP
                  </p>
                  <h2
                    className={`text-[80px] font-bold ${activeTab === ourProcess.services.length - 1 ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}
                  >
                    {String(activeTab + 1).padStart(2, '0')}
                  </h2>
                </div>

                {/* ICONS */}
                {ourProcess.services.map((service: any, idx: number) => {
                  const angle = (360 / ourProcess.services.length) * idx - 90;
                  const radius = 260;

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveTab(idx);
                        sectionRefs.current[idx]?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                      }}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `
                          translate(-50%, -50%)
                          rotate(${angle}deg)
                          translate(${radius}px)
                          rotate(${-angle}deg)
                        `,
                      }}
                    >
                      <div
                        className={`flex h-[60px] w-[60px] items-center justify-center rounded-full border ${activeTab === idx
                            ? 'border-[#FB9100] bg-[#FB9100]'
                            : 'border-[#00000033] bg-white'
                          }`}
                      >
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={30}
                          height={30}
                          className={
                            activeTab === idx ? 'brightness-0 invert' : ''
                          }
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= RIGHT (SCROLL CONTENT) ================= */}
          <div className="w-full space-y-[4rem] lg:w-[55%]">
            {ourProcess.services.map((service: any, idx: number) => (
              <div
                key={idx}
                ref={(el) => {
                  sectionRefs.current[idx] = el;
                }}
                className={`transform border-b pb-[4rem] transition-all duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-10'} ${isVisible ? (activeTab === idx ? 'opacity-100' : 'opacity-40') : 'opacity-0'} `}
                style={{
                  transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                }}
              >
                <h3
                  className={`mb-3 font-semibold uppercase ${activeTab === idx ? 'text-[#FB9100]' : 'text-[#999]'
                    }`}
                >
                  Step {idx + 1}: {service.title}
                </h3>
                {service.description.map((item: any, i: number) => {
                  if (typeof item === "string") {
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
                        className="flex items-start gap-3 sm:gap-4 my-2"
                      >
                        <Image
                          src={SocialMediaCheck}
                          width={17}
                          height={23}
                          alt="arrow"
                          className="shrink-0 mt-1 w-[14px] h-auto sm:w-[17px]"
                        />

                        <p className="text-left">
                          {listItem.des || listItem.description}
                        </p>
                      </div>
                    ));
                  }
                  return null;
                })}
                
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default OurProcess;
