import React from 'react';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Future_Proof_Card from '../../../../../../public/assets/linkBuilding/blueCardBg.png';
import Image from 'next/image';

const FutureProof = () => {
  return (
    <div className='relative min-h-[450px] rounded-2xl transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300'>
      <Image
        src={Future_Proof_Card}
        fill
        alt="hero bg"
        priority
        className="pointer-events-none object-fill lg:object-cover rounded-2xl"
      />
      <div className='absolute h-full top-[2rem] left-[2rem] right-[2rem]'>
        <p className="uppercase text-white">
          Future-Proof Your
        </p>

        <h1 className="text-white text-[clamp(1.8rem,2.688vw,2.688rem)] leading-[clamp(2.5rem,2.688vw,3.65rem)] text-center lg:text-left">
          Business With <br />
          Smart{' '}
          <span className="text-[#00A3FF] font-bold text-[clamp(1.8rem,2.688vw,2.688rem)]">
            Link Building Services.
          </span>
        </h1>

        <p className="whitespace-pre-line py-[1rem] text-white">
          We combine the power of AI precision with editorial outreach to scale
          your organic visibility, dominate search results and strengthen your
          brand.
        </p>

        <div className="absolute bottom-[4rem] flex justify-center">
          <SaveAndCancel
            name="Talk To an Expert!"
            isIcon={true}
            buttonWidth="w-[12rem] lg:w-[14rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default FutureProof;
