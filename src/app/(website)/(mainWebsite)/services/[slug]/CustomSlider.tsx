'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';

export default function CustomSlider({ data, colors }: any) {
  return (
    <div className="mx-auto w-full pt-[1rem]">
      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        centeredSlides
        slidesPerView="auto"
        spaceBetween={24}
        slidesOffsetBefore={240}
        slidesOffsetAfter={240}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '#custom-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `
              <span
                class="${className}"
                style="
                  width:8px;
                  height:8px;
                  background:${colors?.textColor};
                  opacity:0.3;
                  margin:0 6px;
                  border-radius:50%;
                  display:inline-block;
                "
              ></span>
            `;
          },
        }}
      >
        {data?.map((item: any, idx: number) => (
          <SwiperSlide key={item.id} className="w-full lg:!w-[40%]">
            <div
              className={`h-[24rem] rounded-[20px] bg-white p-8`}
              style={{
                border: `1px solid ${colors?.borderColor}`,
              }}
            >
              <h2
                className={`mx-auto w-fit rounded-[20px] px-6 py-2 lg:mx-0`}
                style={{
                  color: colors?.textColor,
                  backgroundColor: colors?.textBg,
                  border: `1px solid ${colors?.borderColor}`,
                }}
              >
                {`0${idx + 1}`}
              </h2>

              <h3
                className={`pb-4 pt-8`}
                style={{
                  color: colors?.textColor,
                }}
              >
                {item?.name}
              </h3>

              <div>
                {item?.description?.map((desc: string, i: number) => (
                  <p key={i} className="py-2">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Pagination OUTSIDE cards */}
      <div
        id="custom-pagination"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '24px',
        }}
      />
    </div>
  );
}
