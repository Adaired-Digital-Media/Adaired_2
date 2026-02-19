'use client';
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Image from 'next/image';
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
import star from '../../../../../../public/assets/icons/star.png';
import web_development_banner_img from '../../../../../../public/assets/web_development_banner_img.png';
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
    <div
      ref={ref}
      className="relative mx-auto w-full overflow-hidden pt-[5vh] lg:pt-[10vh]"
    >
      <Image
        src={hero_banner}
        fill
        alt="hero bg"
        priority
        className="pointer-events-none object-fill lg:object-cover"
      />
      <MaxWidthWrapper className="">
        {banner?.isCenter ? (
          <div className="relative z-10 block justify-center pb-[6rem] pt-[9rem] lg:flex">
            <div
              className={`w-[100%] space-y-5 transition-all duration-1000 lg:w-[60%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            >
              <div
                className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
              >
                <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                  <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                    <h1 className="text-center capitalize text-[#FB9108]">
                      {banner?.heading}
                    </h1>
                    <h1 className="text-center capitalize">{banner?.label}</h1>
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
                  name={banner?.button}
                  isIcon={true}
                  handleClick={() => router.push('/contact')}
                  className="w-[18rem] lg:w-[18rem]"
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            {banner?.code === '02' && (
              <div className="relative z-10 block justify-between pb-[6rem] pt-[9rem] lg:flex">
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
                      name={banner?.button}
                      isIcon={true}
                      handleClick={() => router.push('/contact')}
                      // className="w-[18rem] lg:w-[14rem]"
                      className={`w-[${banner?.width}] lg:w-[${banner?.widthLg}]`}
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
                  className={`relative my-auto mt-[4rem] w-[100%] transition-all delay-200 duration-1000 lg:w-[50%] lg:pt-0 ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-16 opacity-0'
                  }`}
                >
                  <div className="my-auto h-full space-y-4">
                    <div className="flex w-[100%] justify-center">
                      <div className="relative flex justify-end">
                        <Image
                          src={banner_img_1}
                          width={563}
                          height={388}
                          alt=""
                          className={`aspect-[563/388] w-[clamp(18rem,35vw,35.5rem)] transition-opacity transition-transform duration-700 ease-in-out md:w-[clamp(18rem,55vw,55.5rem)] lg:w-[clamp(18rem,35vw,35.5rem)] ${
                            active === 'img1'
                              ? 'z-40 opacity-100'
                              : active
                                ? 'opacity-40'
                                : 'opacity-100'
                          }`}
                        />

                        <Image
                          src={banner_img_4}
                          width={302}
                          height={186}
                          alt=""
                          className={`absolute left-[-10%] top-[15%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:w-[clamp(8rem,23vw,23.75rem)] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                            isActive('img4')
                              ? 'left-1/2 top-1/2 z-40 translate-x-[105%] translate-y-[40%] scale-105 opacity-100'
                              : 'z-10 translate-x-0 translate-y-0 scale-100'
                          }`}
                        />

                        <Image
                          src={banner_img_3}
                          width={302}
                          height={186}
                          alt=""
                          className={`absolute bottom-[-15%] right-[10%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:bottom-[-10%] md:right-[10%] md:w-[clamp(8rem,23vw,23.75rem)] lg:bottom-[-14%] lg:right-[10%] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                            isActive('img3')
                              ? 'left-1/2 top-1/2 z-40 -translate-x-[50%] -translate-y-[50%] scale-105 opacity-100 md:-translate-y-[65%] lg:-translate-y-[50%]'
                              : 'z-10'
                          }`}
                        />
                        <Image
                          src={banner_img_2}
                          width={302}
                          height={186}
                          alt=""
                          className={`absolute right-[-10%] top-[-15%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:top-[-15%] md:w-[clamp(8rem,23vw,23.75rem)] lg:top-[-12%] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                            isActive('img2')
                              ? 'left-1/2 top-1/2 z-40 -translate-x-[50%] translate-y-[115%] scale-105'
                              : 'z-10 translate-x-0 translate-y-0 scale-100'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {banner?.code === '03' && (
              <div className="relative z-10 block justify-between pb-[6rem] pt-[9rem] lg:flex">
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
                      name={banner?.button}
                      isIcon={true}
                      handleClick={() => router.push('/contact')}
                      // className="w-[18rem] lg:w-[14rem]"
                      className={`w-[${banner?.width}] lg:w-[${banner?.widthLg}]`}
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
                  className={`relative my-auto w-[100%] transition-all delay-200 duration-1000 lg:mt-0 lg:w-[50%] ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-16 opacity-0'
                  }`}
                >
                  <div className="my-auto h-full space-y-4">
                    <div className="flex w-[100%] justify-center">
                      <div className="relative flex justify-end">
                        <Image
                          src={banner_img_1}
                          width={563}
                          height={388}
                          alt=""
                          className={`aspect-[563/388] w-[clamp(18rem,35vw,35.5rem)] transition-opacity transition-transform duration-700 ease-in-out md:w-[clamp(18rem,55vw,55.5rem)] lg:w-[clamp(18rem,35vw,35.5rem)] ${
                            active === 'img1'
                              ? 'z-40 opacity-100'
                              : active
                                ? 'opacity-40'
                                : 'opacity-100'
                          }`}
                        />

                        <Image
                          src={banner_img_4}
                          width={302}
                          height={186}
                          alt=""
                          className={`absolute left-[-10%] top-[15%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:w-[clamp(8rem,23vw,23.75rem)] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                            isActive('img4')
                              ? 'left-1/2 top-1/2 z-40 translate-x-[105%] translate-y-[40%] scale-105 opacity-100'
                              : 'z-10 translate-x-0 translate-y-0 scale-100'
                          }`}
                        />

                        <Image
                          src={banner_img_3}
                          width={302}
                          height={186}
                          alt=""
                          className={`absolute bottom-[-15%] right-[10%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:bottom-[-10%] md:right-[10%] md:w-[clamp(8rem,23vw,23.75rem)] lg:bottom-[-14%] lg:right-[10%] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                            isActive('img3')
                              ? 'left-1/2 top-1/2 z-40 -translate-x-[50%] -translate-y-[50%] scale-105 opacity-100 md:-translate-y-[65%] lg:-translate-y-[50%]'
                              : 'z-10'
                          }`}
                        />
                        <Image
                          src={banner_img_2}
                          width={302}
                          height={186}
                          alt=""
                          className={`absolute right-[-10%] top-[-15%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:top-[-15%] md:w-[clamp(8rem,23vw,23.75rem)] lg:top-[-12%] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                            isActive('img2')
                              ? 'left-1/2 top-1/2 z-40 -translate-x-[50%] translate-y-[115%] scale-105'
                              : 'z-10 translate-x-0 translate-y-0 scale-100'
                          }`}
                        />
                      </div>
                    </div>
                    {/* <Image
                      src={banner_img_4}
                      width={302}
                      height={186}
                      alt=""
                      className={`absolute left-[5%] top-[10%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:w-[clamp(8rem,23vw,23.75rem)] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                        isActive('img4')
                          ? 'left-1/2 top-1/2 z-40 translate-x-[105%] translate-y-[40%] scale-105 opacity-100'
                          : 'z-10 translate-x-0 translate-y-0 scale-100'
                      }`}
                    />

                    <Image
                      src={banner_img_3}
                      width={302}
                      height={186}
                      alt=""
                      className={`absolute bottom-[-15%] right-[20%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:bottom-[-10%] md:right-[20%] md:w-[clamp(8rem,23vw,23.75rem)] lg:bottom-[20%] lg:right-[20%] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                        isActive('img3')
                          ? 'left-1/2 top-1/2 z-40 -translate-x-[50%] -translate-y-[65%] scale-105 opacity-100 md:-translate-y-[65%] lg:-translate-y-[120%]'
                          : 'z-10'
                      }`}
                    />
                    <Image
                      src={banner_img_2}
                      width={302}
                      height={186}
                      alt=""
                      className={`absolute right-[5%] top-[-15%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:top-[15%] md:w-[clamp(8rem,23vw,23.75rem)] lg:top-[-10%] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                        isActive('img2')
                          ? 'left-1/2 top-1/2 z-40 -translate-x-[50%] translate-y-[115%] scale-105'
                          : 'z-10 translate-x-0 translate-y-0 scale-100'
                      }`}
                    /> */}
                  </div>
                </div>
              </div>
            )}
            {banner?.code === '04' && (
              <div className="relative z-10 block justify-between pb-[0rem] pt-[9rem] lg:flex lg:pb-0 lg:pt-0">
                <div
                  className={`my-auto w-[100%] space-y-5 transition-all duration-1000 lg:w-[45%] xl:w-[45%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                >
                  <div
                    className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
                  >
                    <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                      <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                        {banner?.subtitle && (
                          <div className="mx-auto flex w-fit gap-3 rounded-full border-[0.71px] border-[#000000]/20 px-[1rem] py-[0.25rem] lg:mx-0 lg:mr-auto">
                            <Image
                              src={star}
                              width={18}
                              height={17}
                              alt="star icon"
                              className="mb-auto"
                            />
                            <span className="my-auto uppercase text-[#000000]">
                              {banner.subtitle}
                            </span>
                          </div>
                        )}

                        <h1 className="text-center capitalize text-[#FB9100] lg:text-left">
                          {banner?.heading}{' '}
                          <span className="font-poppins text-[clamp(1.8rem,3vw,3.75rem)] font-bold capitalize leading-[clamp(2.5rem,3.65vw,4.65rem)] text-[#000000]">
                            {banner?.label}
                          </span>
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
                      name={banner?.button}
                      isIcon={true}
                      handleClick={() => router.push('/contact')}
                      buttonWidth="!w-[20rem]"
                    />
                  </div>
                </div>
                <div className="pb-[6rem] pt-[9rem]">
                  <Image
                    src={banner?.bgImg}
                    width={800}
                    height={600}
                    alt="Web Development Banner"
                    className=""
                  />
                </div>
              </div>
            )}
            {banner?.code === '05' && (
              <div className="relative z-10 block justify-between pb-[3em] pt-[5em] lg:flex lg:py-[4em]">
                <div
                  className={`my-auto w-[100%] space-y-5 transition-all duration-1000 lg:w-[50%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                >
                  <div
                    className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
                  >
                    <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                      <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                        <h1 className="text-center capitalize text-[#FB9100] lg:text-left">
                          {banner?.heading}
                          <span className="font-poppins text-[clamp(1.8rem,3vw,3.75rem)] font-bold capitalize leading-[clamp(2.5rem,3.65vw,4.65rem)] text-[#000000]">
                            {banner?.label}
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div className={`$ 'pt-[1rem]'}`}>
                      <h3 className="py-7 text-center lg:text-left">
                        {banner?.desc}
                      </h3>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <SaveAndCancel
                      name={banner?.button}
                      isIcon={true}
                      handleClick={() => router.push('/contact')}
                      buttonWidth="!w-[20rem]"
                    />
                  </div>
                </div>
                <div className="flex justify-center pt-[3rem] lg:justify-end lg:pt-0">
                  <Image
                    src={banner?.bgImg}
                    width={784}
                    height={654}
                    alt="Web Development Banner"
                    className="aspect-[784/654] w-[clamp(18rem,38.49vw,49rem)] md:w-[clamp(30rem,38.49vw,49rem)] lg:w-[clamp(18rem,38.49vw,49rem)]"
                  />
                </div>
              </div>
            )}
            {banner?.code === '06' && (
              <div className="relative z-10 block justify-between pb-[0rem] pt-[9rem] lg:flex lg:pb-0 lg:pt-0">
                <div
                  className={`my-auto w-[100%] space-y-5 transition-all duration-1000 lg:w-[55%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                >
                  <div
                    className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
                  >
                    <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                      <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                        {banner?.subtitle && (
                          <div className="mx-auto flex w-fit gap-3 rounded-full border-[0.71px] border-[#000000]/20 px-[1rem] py-[0.25rem] lg:mx-0 lg:mr-auto">
                            <Image
                              src={star}
                              width={18}
                              height={17}
                              alt="star icon"
                              className="mb-auto"
                            />
                            <span className="my-auto uppercase text-[#000000]">
                              {banner.subtitle}
                            </span>
                          </div>
                        )}

                        <h1 className="text-center capitalize lg:text-left">
                          <span className="font-poppins text-[clamp(1.8rem,3vw,3.75rem)] font-light capitalize leading-[clamp(2.5rem,3.65vw,4.65rem)] text-[#000000]">
                            {banner?.label}{' '}
                          </span>
                          {banner?.heading}
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
                      name={banner?.button}
                      isIcon={true}
                      handleClick={() => router.push('/contact')}
                      buttonWidth="!w-[20rem]"
                    />
                  </div>
                </div>
                <div className="py-[3rem]">
                  <Image
                    src={banner?.bgImg}
                    width={676}
                    height={676}
                    alt="Web Development Banner"
                    className=""
                  />
                </div>
              </div>
            )}
            {banner?.code === '07' && (
              <div className="relative z-10 block justify-between pb-[0rem] pt-[9rem] lg:flex lg:pb-0 lg:pt-0">
                <div
                  className={`my-auto w-[100%] space-y-5 transition-all duration-1000 lg:w-[42%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                >
                  <div
                    className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
                  >
                    <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                      <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                        {banner?.subtitle && (
                          <div className="mx-auto flex w-fit gap-3 rounded-full border-[0.71px] border-[#000000]/20 px-[1rem] py-[0.25rem] lg:mx-0 lg:mr-auto">
                            <Image
                              src={star}
                              width={18}
                              height={17}
                              alt="star icon"
                              className="mb-auto"
                            />
                            <span className="my-auto uppercase text-[#000000]">
                              {banner.subtitle}
                            </span>
                          </div>
                        )}

                        <h1 className="text-center capitalize text-[#FB9100] lg:text-left">
                          <span className="font-poppins text-[clamp(1.8rem,3vw,3.75rem)] font-light capitalize leading-[clamp(2.5rem,3.65vw,4.65rem)] text-[#000000]">
                            {banner?.label}{' '}
                          </span>
                          {banner?.heading}
                        </h1>
                      </div>
                    </div>
                    <div className={`$ 'pt-[1rem]'}`}>
                      {banner?.span && (
                        <p className="pt-4 text-center font-montserrat font-bold lg:text-left">
                          {banner?.span}
                        </p>
                      )}

                      {banner?.subheading && (
                        <h3 className="pt-7 text-[22px] font-[600] leading-[32px]">
                          {banner?.subheading}
                        </h3>
                      )}

                      {/* <p className="py-7 text-center lg:text-left">
                        {banner?.desc}
                      </p> */}
                      <div className="py-7 text-center lg:text-left">
                        {banner?.desc?.map((item: any, index: number) => (
                          <p key={index} className="mb-4">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <SaveAndCancel
                      name={banner?.button}
                      isIcon={true}
                      handleClick={() => router.push('/contact')}
                      buttonWidth="!w-[20rem]"
                    />
                  </div>
                </div>
                <div className="py-[3rem]">
                  <Image
                    src={banner?.bgImg}
                    width={676}
                    height={676}
                    alt="Web Development Banner"
                    className=""
                  />
                </div>
              </div>
            )}
            {banner?.code === '08' && (
              <div className="relative z-10 block justify-between pb-[0rem] pt-[9rem] lg:flex lg:pb-0 lg:pt-0">
                <div
                  className={`my-auto w-[100%] space-y-5 transition-all duration-1000 lg:w-[50%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                >
                  <div
                    className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
                  >
                    <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                      <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                        {banner?.subtitle && (
                          <div className="mx-auto flex w-fit gap-3 rounded-full border-[0.71px] border-[#000000]/20 px-[1rem] py-[0.25rem] lg:mx-0 lg:mr-auto">
                            <Image
                              src={star}
                              width={18}
                              height={17}
                              alt="star icon"
                              className="mb-auto"
                            />
                            <span className="my-auto uppercase text-[#000000]">
                              {banner.subtitle}
                            </span>
                          </div>
                        )}

                        <h1 className="text-center font-normal capitalize lg:text-left">
                          {banner?.label}{' '}
                        </h1>
                        <h1 className="text-center capitalize text-[#FB9100] lg:text-left">
                          {banner?.heading}
                        </h1>
                      </div>
                    </div>
                    <div className={`$ 'pt-[1rem]'}`}>
                      {banner?.subheading && (
                        <p className="pt-7 font-semibold">
                          {banner?.subheading}
                        </p>
                      )}

                      {/* <p className="py-7 text-center lg:text-left">
                        {banner?.desc}
                      </p> */}

                      {banner?.desc?.map((item: any, index: number) => (
                        <p
                          key={index}
                          className="pt-7 text-center lg:text-left"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center pt-[2rem] lg:justify-start">
                    <SaveAndCancel
                      name={banner?.button}
                      isIcon={true}
                      handleClick={() => router.push('/contact')}
                    />
                  </div>
                </div>
                <div className="flex w-[100%] justify-end justify-items-end pb-[4rem] pt-[4rem] lg:w-[45%] lg:pb-[6rem] lg:pt-[9rem]">
                  <Image
                    src={banner?.bgImg}
                    width={768}
                    height={548}
                    alt="Web Development Banner"
                    className=""
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
