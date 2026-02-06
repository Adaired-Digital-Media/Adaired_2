import { WhyChooseSectionData } from '@/@core/data/website/Homepage';
import Image from 'next/image';
import { useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Heading from '../../common/Heading';
import useHoverZoom from '@/@core/hooks/useHoverZoom';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const WhyChoose = () => {
  const { subTitle, title, span, description, points } = WhyChooseSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.25);

  return (
    <section className="relative py-[3rem] lg:py-[4rem] xl:py-[6rem]">
      {/* <Image src={chooseUsBg} fill alt="d" className="object-cover" priority /> */}
      <div ref={ref} className="relative z-20">
        <MaxWidthWrapper>
          <div
            className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
          >
            <Heading
              breakIndex={5}
              isLabel={true}
              subTitle={subTitle}
              title={title}
              span={span}
              description={description}
              isInCenter={true}
              isBgWhite={true}
            />
          </div>

          <div className="grid grid-cols-1 py-[1rem] md:grid-cols-2 md:gap-[1rem] lg:mt-[6rem] lg:grid-cols-4 lg:gap-3 xl:gap-[1.5rem]">
            {points?.map((item, idx: any) => {
              const hovered = isHover === idx;
              const zoom = useHoverZoom({
                scaleIn: 1.1,
                scaleOut: 0.9,
              });
              return (
                <div
                  key={idx}
                  {...zoom.handlers}
                  onMouseEnter={() => setIsHover(idx)}
                  onMouseLeave={() => setIsHover(1)}
                  className={`relative transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
                  style={{
                    transitionDelay: `${idx * 120}ms`,
                  }}
                >
                  <div
                    className={`my-2 cursor-pointer rounded-3xl border-[1px] border-[#FB910040] bg-[#FFF8F0] p-[2rem] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl md:my-0 md:h-[20rem] lg:mt-[-2.5rem] lg:h-[23rem] lg:p-[0.8rem] xl:h-[25rem] xl:p-[1.5rem]`}
                  >
                    <div className="flex justify-center lg:justify-start">
                      <Image
                        src={item.icon}
                        width={70}
                        height={70}
                        alt="img"
                        className="rounded-xl border-[1px] border-[#FB910040] bg-[#FEDAAA66] p-3.5 text-[#000000] lg:h-[55px] lg:w-[55px] xl:h-[70px] xl:w-[70px]"
                      />
                    </div>
                    <p
                      className={`pt-[1.5rem] text-center font-montserrat text-[25px] font-semibold leading-[35px] text-[#111111] lg:text-left lg:text-[1.115rem] xl:pt-[2rem] xl:text-[25px] 1360:text-[1.125rem]`}
                    >
                      {item?.title}
                    </p>
                    <p
                      className={`text-center font-montserrat text-[25px] font-semibold text-[#111111] md:leading-[28px] lg:text-left lg:text-[1.115rem] lg:leading-[25px] xl:text-[25px] xl:leading-[35px] 1360:text-[1.125rem] 1360:leading-3`}
                    >
                      {item?.span}
                    </p>
                    <p
                      className={`pt-[0.8rem] text-justify text-[#323232B2] lg:text-left xl:pt-[1.5rem]`}
                    >
                      {/* {item?.description.length > 140
                        ? item?.description.slice(0, 140) + '...'
                        : item?.description} */}
                      {item?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default WhyChoose;
