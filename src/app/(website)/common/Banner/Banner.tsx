import React from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Heading from '../Heading';

const Banner = ({ subTitle, title }: any) => {
  return (
    <div className="bg-slate-100 pb-[6rem] pt-[20vh]">
      <MaxWidthWrapper className="">
        <Heading subTitle={subTitle} title={title} span={''} />
      </MaxWidthWrapper>
    </div>
  );
};

//e
export default Banner;
