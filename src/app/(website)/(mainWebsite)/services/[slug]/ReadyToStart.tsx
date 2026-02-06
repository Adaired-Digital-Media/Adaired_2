'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useState } from 'react';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

const ReadyToStart = ({ handleClick }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section ref={ref} className="relative z-20">
        <MaxWidthWrapper>
          <div
            className={`rounded-3xl bg-[#FB9100] py-[3rem] transition-all duration-1000 lg:py-[6rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            <Heading
              breakIndex={5}
              isH1={true}
              title={'Ready to Start Your SEO Project Today?'}
              description={
                'Boost your online visibility, attract targeted traffic, and grow your business with our expert SEO strategies.'
              }
              isInCenter={true}
              isBgWhite={false}
              className="whitespace-pre-line"
            />
            <div className="flex justify-center py-[2rem]">
              <button
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => setOpen(!open)}
                className={`font-Outfi flex w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] bg-[#FFFFFF] px-[2rem] py-[0.75rem] text-xxs font-normal transition-all duration-300 ease-out active:scale-95 xl:text-xs 1366:text-[14px] 1400:text-[18px] 1470:text-[18px] 1600:text-[18px] 1680:text-[18px]`}
              >
                {'Get Your Free Marketing Audit'}
                <IoIosArrowRoundForward
                  size={25}
                  className={`${isHover ? 'rotate-[360deg] transition-all duration-300 ease-out active:scale-95' : 'rotate-[310deg]'}`}
                />
              </button>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative z-10 -mt-32 h-[13vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/footer_img.png"
            alt="Footer background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default ReadyToStart;
