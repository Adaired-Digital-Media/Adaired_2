import React from 'react';
import Heading from '@/app/(website)/common/Heading';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Image from 'next/image';
import Future_Proof from '../../../../../../public/assets/images/futureProof.png';

const FutureProof = () => {
    return (
        <div
            className={`relative h-[36rem] overflow-hidden rounded-2xl border bg-[#030A15] text-white p-[2.5rem] transition-all duration-1000 1400:h-[46rem] 1440:h-[44rem] 1470:h-[43rem] 1600:h-[42rem] 1710:h-[40rem] 3xl:h-[36rem]`}
        >
            <div className="relative z-10 h-full">
                <h3 className="uppercase text-white">Future-Proof Your </h3>

                <Heading className='flex justify-center lg:justify-start'
                    subTitle={''}
                    breakIndex={5}
                    isH1={false}
                    isBgWhite={true}
                    title={'Business With Smart'}
                    span={'Link Building Services.'}
                    spanColor="text-[#00A3FF]"
                />

                <p className="py-[1rem] whitespace-pre-line leading-relaxed text-white">
                    We combine the power of AI precision with editorial outreach to scale your organic visibility,
                    dominate search results and strengthen your brand.
                </p>

                <SaveAndCancel
                    name={'Talk To an Expert!'}
                    isIcon={true}
                    className="absolute bottom-0 w-[12rem] lg:w-[14rem]"
                />
            </div>


            <div className="absolute inset-x-0 bottom-0 h-[384px] bg-[#030A15] z-0 pointer-events-none">

                <div
                    className="absolute inset-0 bg-[#00A3FF] opacity-70"
                    style={{
                        WebkitMaskImage: `url(${Future_Proof.src})`,
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'bottom',
                        WebkitMaskSize: 'contain',
                        maskImage: `url(${Future_Proof.src})`,
                        maskRepeat: 'no-repeat',
                        maskPosition: 'bottom',
                        maskSize: 'contain',
                    }}
                />
            </div>


        </div>
    );
};

export default FutureProof;
