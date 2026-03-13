import { cn } from '@core/utils/class-names';
import React from 'react';

const MaxWidthWrapper: React.FC<{
  className?: string;
  isGap?: boolean;
  isRowReverse?: boolean;
  children: React.ReactNode;
  style?:any
}> = ({ className, isGap, isRowReverse, children, style }) => {
  return (
    <section
      // className={cn(
      //   'mx-auto box-border w-[90%] md:w-[80%] lg:w-[90%] xl:w-[83%]',
      //   className
      // )}
      className={cn(
        `mx-auto box-border ${
          isGap
            ? isRowReverse
              ? 'pr-[4%] lg:pr-[8.5%]'
              : 'pl-[4%] lg:pl-[8.5%]'
            : 'lg:px-[8.5%]'
        }`,
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
