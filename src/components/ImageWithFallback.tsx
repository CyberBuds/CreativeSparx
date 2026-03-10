'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  layout: 'fill' | 'intrinsic' | 'responsive' | 'fixed';
  objectFit?: 'cover' | 'contain';
  className?: string;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  const placeholderImg = `https://placehold.co/600x400/2D3748/E2E8F0/png?text=${encodeURIComponent(alt)}`;

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(placeholderImg);
      }}
    />
  );
};

export default ImageWithFallback;
