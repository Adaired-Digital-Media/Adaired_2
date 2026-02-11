import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import img from '../../../../../../public/assets/images/needofaiseo.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import imgCorner from '../../../../../../public/assets/images/authLinkBuilding.png';
import Mask from '../../../../../../public/assets/images/home/Mask group.png';

const NeedOfAISEO = ({ needOfService }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div className="py-3 lg:py-[4rem]">
      <MaxWidthWrapper>
        <div
          ref={ref}
          className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2"
        >
          {needOfService?.isBgCornerImg ? (
            <div className="relative mx-auto mb-[3rem] lg:mb-0 mt-[6rem] flex-1 md:mt-[6rem] lg:mt-0">
              {/* CENTER IMAGE */}
              <div
                className={`group flex items-center justify-center p-3 transition-all duration-1000`}
              >
                <Image
                  src={imgCorner}
                  alt="About Image"
                  width={625}
                  height={470}
                  className="my-[1rem] h-[14rem] w-[14rem] lg:m-[3rem] rounded-lg transition-transform duration-300 ease-out group-hover:scale-110 md:my-0 md:h-[28rem] md:w-[36.313rem] lg:my-[2rem] lg:h-[18rem] lg:w-[20rem] xl:h-[25.375rem] xl:w-[39.063rem] 1360:w-[25rem] 1400:w-[27rem] 1600:w-[32rem] 1680:h-[25.375rem] 1680:w-[34rem] 3xl:h-[25.375rem] 3xl:w-[39.063rem]"
                />
              </div>
              {/* MASK – TOP RIGHT */}
              <Image
                src={Mask}
                alt="Mask Image"
                width={246}
                height={136}
                className="absolute right-[-3rem] top-[-2rem] -z-10 lg:right-0 lg:top-0"
              />

              {/* MASK – BOTTOM LEFT */}
              <Image
                src={Mask}
                alt="imgCorner Image"
                width={246}
                height={136}
                className="absolute bottom-[-1.6rem] left-[-3rem] -z-10 lg:bottom-0 lg:left-0"
              />
            </div>
          ) : (
            <div
              ref={ref}
              className={`flex items-center justify-center transition-all duration-1000 lg:items-start lg:justify-start ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
            >
              <Image src={img} width={652} height={568} alt="fd" />
            </div>
          )}
          <div
            className={`my-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h2>{needOfService?.heading}</h2>
            {needOfService?.data?.map((desc: any) => {
              return <p className="pt-[1rem]">{desc?.desctioption}</p>;
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NeedOfAISEO;