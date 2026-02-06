import { SolutionsSectionData } from '@/@core/data/website/Homepage';
import React, { useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';
import img from '../../../../../public/assets/images/home/solutions.png';
import Mask from '../../../../../public/assets/images/home/Mask group.png';

import {
  useImageReveal,
  useZoomOnView,
} from '@/@core/hooks/useScrollAnimations';
import SaveAndCancel from '../../common/SaveAndCancel';
import GetQuoteModal from '../../components/popup/GetQuoteModal';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
const Solutions = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  const [open, setOpen] = useState(false);
  const { subTitle, title, points, description, cursive } =
    SolutionsSectionData;
  const { ref: imageRef, className: imageClass } = useImageReveal({
    direction: 'left',
    delay: 350,
  });

  const { ref: zoomRef, className: zoomClass } = useZoomOnView({
    delay: 200,
    once: true,
  });

  return (
    <section className="">
      <MaxWidthWrapper className="pb-[8rem] pt-[3rem] lg:py-[4rem] xl:py-[6rem]">
        <div
          ref={ref}
          className="flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-[3rem] xl:gap-[5rem]"
        >
          {/* Image Section */}
          <div className="relative mx-auto mt-[6rem] flex-1 md:mt-[6rem] lg:mt-0">
            {/* CENTER IMAGE */}
            <div
              className={`flex items-center justify-center p-3 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} `}
            >
              <Image
                src={img}
                alt="About Image"
                width={625}
                height={470}
                className="my-[0rem] h-[14rem] w-[14rem] rounded-lg md:my-0 md:h-[28rem] md:w-[36.313rem] lg:my-[2rem] lg:h-[18rem] lg:w-[20rem] xl:h-[25.375rem] xl:w-[39.063rem] 1360:w-[25rem] 1400:w-[27rem] 1600:w-[32rem] 1680:h-[25.375rem] 1680:w-[34rem] 3xl:h-[25.375rem] 3xl:w-[39.063rem]"
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
              alt="Mask Image"
              width={246}
              height={136}
              className="absolute bottom-[-1.6rem] left-[-3rem] -z-10 lg:bottom-0 lg:left-0"
            />
          </div>

          {/* Content Section */}
          <div
            className={`my-auto flex-1 transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} `}
          >
            {/* Points Section */}
            <Heading
              isLabel={true}
              subTitle={subTitle}
              title={title}
              span=""
              description={description}
            />
            <SaveAndCancel
              name={'Get Your Free Website Audit'}
              isIcon={true}
              buttonWidth={'w-[22rem] 1360:w-[18rem] 1400:w-[22rem]'}
              handleClick={() => setOpen(!open)}
              className="rem] mt-[2rem]"
            />
          </div>
        </div>
      </MaxWidthWrapper>

      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Solutions;
