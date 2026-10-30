"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

const ImageWithFallback = ({
  src,
  alt,
  fill = false,
  className = "",
  sizes,
  width,
  height,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  // Placeholder SVG avec dégradé romantique
  const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f5d5e0;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23f8b4c8;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23d4af37;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad)' /%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='40' fill='white' text-anchor='middle' dy='.3em' opacity='0.7'%3E%E2%9D%A4%EF%B8%8F%3C/text%3E%3C/svg%3E`;

  const handleError = () => {
    setIsError(true);
    setImgSrc(placeholderSvg);
  };

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
