import { ExpectSectionData } from '@/@core/data/website/Homepage';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';
import CountUp from '../CountUp';
import useImageAnimation from '@/@core/hooks/useImageAnimation';
import expectImg from '../../../../../public/assets/images/home/expect.png';
import { useState } from 'react';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const Expect = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const [hover, setHover] = useState(null);
  const { image, subTitle, title, description, records } = ExpectSectionData;
  return (
    <section className="1bg-[#F5F5F580]">
      <MaxWidthWrapper className="py-[3rem] lg:py-[4rem] xl:py-[6rem]">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            isLabel={true}
            isDecVarticle={true}
            subTitle={subTitle}
            title={title}
            span=""
            description={description}
          />
        </div>

        <div className="relative grid grid-cols-1 gap-[1rem] pt-7 lg:grid-cols-2 xl:gap-[2rem]">
          {/* Content Section */}
          <div
            ref={ref}
            className={`w-[25rem relative h-[20rem] 1360:h-[550px] 1400:h-[550px] 1400:w-[35rem] 1470:h-[600px] 1600:h-[575px] 1600:w-[40rem] 1680:h-[550px] 1710:w-[43rem] 3xl:h-[600px] 3xl:w-[48rem] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
          >
            <Image
              src={expectImg}
              alt="About Image"
              fill
              className="rounded-3xl object-cover p-1"
            />
          </div>
          <div className="flex-1 p-2 text-center lg:text-left">
            {/* Points Section */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
              {records?.map((record, idx: any) => {
                const isHovered = hover === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                    style={{
                      transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                    }}
                    className={`rounded-3xl border-[1px] border-[#00000026]/10 p-[1.8rem] transition-all duration-700 lg:p-[1rem] xl:px-[1.75rem] xl:py-[1.5rem] 1360:p-[1rem] 1400:p-[1rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${
                      isHovered
                        ? 'border-[0px] border-[#FFFFFF] bg-gradient-to-br from-[#FB9100] to-[#000000]'
                        : 'bg-white'
                    } `}
                  >
                    <div
                      className={`text-left text-xl font-semibold transition-colors duration-300 3xl:text-[50px] ${isHovered ? 'text-white' : 'text-[#FB9100]'} `}
                    >
                      <CountUp end={record.number} />
                      {record.suffix}
                      <span className="1360:text-[13px] 1400:text-[15px] 3xl:text-[20px]">
                        {record.suffix2}
                      </span>
                    </div>

                    <p
                      className={`pt-[0.5rem] text-left font-bold transition-colors duration-300 xl:pb-[1rem] xl:pt-[2.25rem] ${isHovered && 'text-white'} `}
                    >
                      {record.name}
                    </p>

                    <p
                      className={`text-left transition-colors duration-300 1400:text-[14px] 1470:text-[18px] 1600:text-[18px] ${isHovered && 'text-white'} `}
                    >
                      {record.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Expect;
