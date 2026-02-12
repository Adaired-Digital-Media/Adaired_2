'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Image from 'next/image';
import adairedHelpImg from '../../../../../../public/assets/aiseo/adairedHelp.png';
// import chat from '../../../../../../public/assets/icons/chat.svg';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const AdairedHelpBackup = ({ adairedHelp }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  return (
    <div className="py-[3rem] lg:py-[4rem]">
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            breakIndex={6}
            isBgWhite
            isInCenter
            title={adairedHelp?.heading}
            className="mx-auto"
          />
        </div>

        {/* IMPORTANT: relative wrapper */}
        <div className="relative flex flex-col items-start gap-[5rem] pt-[3rem] lg:flex-row">
          {/* LEFT IMAGE – STICKY */}
          <div
            // className="twop-[16rem] w-full lg:sticky lg:w-[40%]"
            className="w-full lg:sticky lg:top-1/2 lg:w-[40%] lg:-translate-y-1/2"
          >
            {/* <div
              ref={ref}
              className={`group relative w-full h-[22rem] sm:h-[26rem] md:h-[31rem] lg:h-[35rem] rounded-[20px] transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
            >
              <Image
                src={adairedHelp?.img}
                fill
                className="rounded-[20px] object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                alt="adairedHelp"
                priority
              />
            </div> */}
            <div
              ref={ref}
              className={`group relative z-20 h-[clamp(22rem,45vw,35rem)] w-full rounded-[20px] transition-all duration-1000 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-16 opacity-0'
              }`}
            >
              <Image
                src={adairedHelp?.img}
                fill
                className="rounded-[20px] object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                alt="adairedHelp"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT – SCROLLS */}
          <div className="flex w-full flex-col gap-[1rem] lg:w-[55%]">
            {adairedHelp?.list?.map((item: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col items-center rounded-[20px] border border-[#FB9100]/25 bg-[#FFF8F0] p-[1.5rem] transition-all duration-700 lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 280}ms`, // 👈 stagger here
                }}
              >
                <Image src={item?.img} width={40} height={40} alt="icon" />

                {/* <p className="pt-[1.5rem] font-bold">{item?.name}</p> */}
                <h3 className="pt-[1.5rem]">{item?.name}</h3>

                <div className="pt-2">
                  {item?.description?.map((desc: string, i: number) => (
                    <p key={i} className="my-3">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AdairedHelpBackup;
