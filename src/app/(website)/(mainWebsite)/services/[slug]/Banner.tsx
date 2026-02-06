'use client';
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Image from 'next/image';
// import banner_img_1 from '../../../../../../public/assets/images/home/banner_img_1.png';
// import banner_img_2 from '../../../../../../public/assets/images/home/banner_img_2.png';
// import banner_img_3 from '../../../../../../public/assets/images/home/banner_img_3.png';
// import banner_img_4 from '../../../../../../public/assets/images/home/banner_img_3.png';
import banner_img_4 from '../../../../../../public/assets/bannerImg/Group 1000006024.svg';
import banner_img_2 from '../../../../../../public/assets/bannerImg/Group 1000006023.svg';
import banner_img_3 from '../../../../../../public/assets/bannerImg/Group 1000006022.svg';
import banner_img_1 from '../../../../../../public/assets/bannerImg/Group 1000006025.svg';

import hero_banner from '../../../../../../public/assets/images/home/hero_banner-bg.png';
import google_rate from '../../../../../../public/google_rate.svg';
import google_review from '../../../../../../public/image 54.png';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import { useRouter } from 'next/navigation';

const Banner = ({ banner }: any) => {
  const router = useRouter();
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const images = ['img1', 'img2', 'img3', 'img4'] as const;
  const [activeIndex, setActiveIndex] = useState(0);

  const [active, setActive] = useState<null | 'img3' | 'img2' | 'img1'>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500); // duration per image

    return () => clearInterval(interval);
  }, []);

  const isActive = (name: (typeof images)[number]) =>
    images[activeIndex] === name;
  const isCenter = true;
  return (
    <div ref={ref} className="animate-pulse relative w-full pt-[10vh]">
      <Image
        src={hero_banner}
        fill
        alt="hero bg"
        priority
        className="pointer-events-none object-cover"
      />
      <MaxWidthWrapper>
        {banner?.isCenter ? (
          <div className="relative z-10 block justify-center lg:flex 1400:py-[9rem] 3xl:py-[14rem]">
            <div
              className={`w-[100%] space-y-5 transition-all duration-1000 lg:w-[60%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            >
              <div
                className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
              >
                <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                  <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                    <h1 className="text-center capitalize">
                      {banner?.heading}
                    </h1>
                    <h1 className="text-center capitalize text-[#FB9100]">
                      {banner?.label}
                    </h1>
                  </div>
                </div>
                <div className={`$ 'pt-[1rem]'}`}>
                  {banner?.span && (
                    <p className="pt-4 text-center font-montserrat font-bold">
                      {banner?.span}
                    </p>
                  )}

                  <p className="my-5 px-0 text-center lg:px-[4%]">
                    Adaired helps you increase your website's authority, outrank
                    your competitors, and improve search engine rankings with
                    our high-quality link-building services. 
                  </p>
                  <p className="text-center lg:px-[4%]">
                    We provide bespoke link-building services that fit the
                    requirements of your company with the help of innovative
                    strategies and technical knowledge.
                  </p>
                </div>
              </div>
              <div className="!mt-[4rem] flex justify-center">
                <SaveAndCancel
                  name={'Start Building Today'}
                  isIcon={true}
                  handleClick={() => router.push('/contact')}
                  className="w-[18rem] lg:w-[18rem]"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 block justify-between pt-[3rem] lg:flex lg:pb-[6rem] lg:pt-[9rem]">
            <div
              className={`w-[100%] space-y-5 transition-all duration-1000 lg:w-[45%] xl:w-[45%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            >
              <div
                className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
              >
                <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                  <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                    <h1 className="text-center capitalize lg:text-left">
                      {banner?.heading}
                    </h1>
                    <h1 className="text-center capitalize text-[#FB9100] lg:text-left">
                      {banner?.label}
                    </h1>
                  </div>
                </div>
                <div className={`$ 'pt-[1rem]'}`}>
                  {banner?.span && (
                    <p className="pt-4 text-center font-montserrat font-bold lg:text-left">
                      {banner?.span}
                    </p>
                  )}

                  <p className="py-7 text-center lg:text-left">
                    {banner?.desc}
                  </p>
                  {banner?.subheading && (
                    <h3 className="text-[22px] font-[600] leading-[32px]">
                      {banner?.subheading}
                    </h3>
                  )}
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <SaveAndCancel
                  name={'Get A Quote'}
                  isIcon={true}
                  handleClick={() => router.push('/contact')}
                  className="w-[18rem] lg:w-[14rem]"
                />
              </div>
              <div className="flex justify-center gap-3 pt-[2rem] lg:justify-start">
                <a
                  href="https://www.google.com/partners/agency?id=7775339798"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={google_rate}
                    width={135}
                    height={58}
                    alt="Upwork"
                    className="cursor-pointer"
                  />
                </a>

                <div className="mx-2 my-auto h-[3.5rem] w-0.5 bg-[#000000]/20"></div>

                <a
                  href="https://www.upwork.com/agencies/1064740584575918080/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={google_review}
                    width={150}
                    height={67}
                    alt="Google Reviews"
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
            <div
              className={`relative mt-[5rem] w-[100%] pt-[0vh] transition-all delay-200 duration-1000 md:pt-[20vh] lg:mt-0 lg:w-[45%] lg:pt-0 xl:w-[45%] ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'} `}
            >
              <div className="relative h-full">
                <div className="absolute left-1/2 top-1/2 h-[25rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 1400:h-[18rem] 1400:w-[28rem] 3xl:h-[25rem] 3xl:w-[35rem]">
                  <Image
                    src={banner_img_1}
                    fill
                    alt=""
                    className={`transition-opacity transition-transform duration-700 ease-in-out ${
                      active === 'img1'
                        ? 'z-40 opacity-100'
                        : active
                          ? 'opacity-40'
                          : 'opacity-100'
                    } `}
                  />
                </div>
                <Image
                  src={banner_img_4}
                  width={302}
                  height={186}
                  alt=""
                  className={`absolute h-[10rem] w-[16rem] transition-all duration-700 ease-in-out 1400:top-[25%] ${
                    isActive('img4')
                      ? 'left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 scale-105 opacity-100 1400:translate-y-[20%] 3xl:1400:translate-y-[50%]'
                      : 'left-0 top-[25%] z-10 translate-x-0 translate-y-0 scale-100 opacity-40'
                  } `}
                />

                <Image
                  src={banner_img_3}
                  width={302}
                  height={186}
                  alt=""
                  className={`absolute bottom-0 right-[25%] h-[10rem] w-[16rem] transition-all duration-700 ease-in-out 1400:bottom-[5%] 1400:right-[15%] 3xl:bottom-0 3xl:right-[15%] ${
                    isActive('img3')
                      ? 'left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 scale-105 opacity-100 1400:translate-x-[-50%] 1400:translate-y-[-50%] 3xl:translate-y-[-50%]'
                      : 'z-10 opacity-40'
                  } `}
                />
                <Image
                  src={banner_img_2}
                  width={388}
                  height={244}
                  alt=""
                  className={`absolute right-0 top-0 h-[10rem] w-[16rem] transition-all duration-700 ease-in-out 1400:top-[5%] 3xl:right-0 3xl:top-0 ${
                    isActive('img2')
                      ? 'left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 scale-105 opacity-100 1400:translate-x-[-50%] 1400:translate-y-[80%] 3xl:translate-y-[100%]'
                      : 'z-10 opacity-40'
                  } `}
                />
              </div>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
// left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 scale-105 opacity-100
