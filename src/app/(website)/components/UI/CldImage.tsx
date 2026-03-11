'use client';

import { CldImage as CldImageDefault, CldImageProps } from 'next-cloudinary';

const CldImage = (props: CldImageProps) => {
  return <CldImageDefault format="auto" quality="auto" {...props} />;
};

export default CldImage;
