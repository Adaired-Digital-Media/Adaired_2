// 'use client';

// import React from 'react';

// import MaxWidthWrapper from '../../components/MaxWidthWrapper';
// import Heading from '../../common/Heading';
// import Image from 'next/image';

// const HowItStarted = ({ howItStarted }: any) => {
//     return (
//         <section className="sm:py-[1rem] md:py-[4rem] bg-[#FFF8F0]">
//             <MaxWidthWrapper>

//                 <Heading
//                     isInCenter={true}
//                     isBgWhite={true}
//                     title={howItStarted?.heading}
//                 />

//                 <div className="relative w-full mx-auto overflow-hidden">

//                     <div className="grid grid-cols-1 md:grid-cols-[1fr_100px_1fr] gap-6 p-6 md:p-20 mx-auto">

//                         {/* LEFT SIDE */}
//                         <div className="grid grid-rows-3">

//                             <div className="bg-white p-10 rounded-xl transition-colors">
//                                 <h3 className="text-[#F28F17] transition-colors">
//                                     {howItStarted.timeline[0].title}
//                                 </h3>

//                                 {howItStarted.timeline[0].desc.map((item: string, index: number) => (
//                                     <p className="text-black transition-colors mt-6">
//                                         {item}
//                                     </p>
//                                 ))}
//                             </div>

//                             <div className='flex items-center justify-center lg:justify-start py-[4rem]'>
//                                 <Image
//                                     src={howItStarted.timeline[1].img}
//                                     alt="timeline image"
//                                     width={500}
//                                     height={300}
//                                 />
//                             </div>

//                             <div className="group bg-white p-10 rounded-xl transition-colors">
//                                 <h3 className="text-[#F28F17] transition-colors">
//                                     {howItStarted.timeline[2].title}
//                                 </h3>

//                                 {howItStarted.timeline[2].desc.map((item: string, index: number) => (
//                                     <p className="text-black transition-colors mt-6">
//                                         {item}
//                                     </p>
//                                 ))}
//                             </div>

//                         </div>

//                         {/* CENTER LINE */}
//                         <div className="flex items-center justify-center">
//                             <div className="relative w-[5px] h-full bg-gradient-to-b from-[#F28F17] to-white mb-2 rounded-[50px]">
//                                 <div className="absolute left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F28F17] w-[20px] h-[20px]"></div>
//                                 <div className="absolute left-1/2 -translate-x-1/2 top-[33%] rounded-full bg-[#F28F17] w-[20px] h-[20px]"></div>
//                                 <div className="absolute left-1/2 -translate-x-1/2 top-[66%] rounded-full bg-[#F28F17] w-[20px] h-[20px]"></div>
//                             </div>
//                         </div>

//                         {/* RIGHT SIDE */}
//                         <div className="grid grid-rows-3">

//                             <div className='flex items-center justify-center lg:justify-end py-[4rem]'>
//                                 <Image
//                                     src={howItStarted.timeline[0].img}
//                                     alt="timeline image"
//                                     width={500}
//                                     height={300}
//                                 />
//                             </div>

//                             <div className="bg-white p-10 rounded-xl transition-colors">
//                                 <h3 className="text-[#F28F17] transition-colors">
//                                     {howItStarted.timeline[1].title}
//                                 </h3>

//                                 {howItStarted.timeline[1].desc.map((item: string, index: number) => (
//                                     <p className="text-black transition-colors mt-6">
//                                         {item}
//                                     </p>
//                                 ))}

//                             </div>

//                             <div className='flex items-center justify-center lg:justify-end py-[4rem]'>
//                                 <Image
//                                     src={howItStarted.timeline[2].img}
//                                     alt="timeline image"
//                                     width={500}
//                                     height={300}
//                                 />
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </MaxWidthWrapper>
//         </section>
//     )
// }

// export default HowItStarted




'use client';

import React from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';

const HowItStarted = ({ howItStarted }: any) => {
  return (
    <section className="py-10 md:py-16 bg-[#FFF8F0]">
      <MaxWidthWrapper>
        <Heading
          isInCenter={true}
          isBgWhite={true}
          title={howItStarted?.heading}
        />

        <div className="relative mt-12">
          
          {/* CENTER LINE (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-gradient-to-b from-[#F28F17] to-white rounded-full" />

          <div className="space-y-16">
            {howItStarted?.timeline?.map((item: any, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row md:items-center"
                >
                  {/* DOT */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#F28F17] rounded-full z-10" />

                  {/* LEFT SIDE */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'
                    }`}
                  >
                    <div className="bg-white p-6 md:p-10 rounded-xl shadow-md">
                      <h3 className="text-[#F28F17] text-lg font-semibold">
                        {item.title}
                      </h3>

                      {item.desc?.map((text: string, i: number) => (
                        <p key={i} className="text-black mt-4">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT SIDE IMAGE */}
                  <div
                    className={`w-full md:w-1/2 mt-6 md:mt-0 ${
                      isEven ? 'md:pl-12' : 'md:order-1 md:pr-12'
                    }`}
                  >
                    <div className="flex justify-center">
                      <Image
                        src={item.img}
                        alt="timeline image"
                        width={500}
                        height={300}
                        className="rounded-xl w-full max-w-[500px] h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowItStarted;
