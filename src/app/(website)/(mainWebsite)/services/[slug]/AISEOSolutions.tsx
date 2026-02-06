import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { cards } from './Card';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import Image from 'next/image';

const AISEOSolutions = ({ whatIncluded }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            breakIndex={7}
            title={whatIncluded?.heading}
            description={whatIncluded?.description}
            isInCenter={true}
            isBgWhite={true}
          />
          <div className="grid grid-cols-1 gap-6 pt-[3rem] md:grid-cols-2 lg:grid-cols-3">
            {whatIncluded?.list?.map((card: any, index: number) => (
              <div
                key={index}
                className={`relative h-[36rem] rounded-2xl border bg-[#F3F3F3] p-[2.5rem] transition-all duration-1000 1400:h-[46rem] 1440:h-[44rem] 1470:h-[43rem] 1600:h-[42rem] 1710:h-[40rem] 3xl:h-[36rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 280}ms`, // 👈 stagger here
                }}
              >
                <div className="flex items-center justify-center lg:justify-start lg:justify-items-start">
                  <Image src={card.icon} alt="" width={60} height={60} />
                </div>

                <h3 className="py-[1rem]">{card.title}</h3>

                <p className="whitespace-pre-line leading-relaxed">
                  {card.description}
                </p>

                <a
                  href={card.linkHref}
                  className="absolute bottom-[2.5rem] flex w-full items-center gap-2 sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem]"
                >
                  <span>{'Get Your Free AI SEO Audit'}</span>
                  <MdOutlineArrowOutward />
                </a>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AISEOSolutions;
