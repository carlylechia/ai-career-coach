"use client";

import React from "react";
import Image, { ImageProps } from "next/image";

export default function LazyImage(props: ImageProps) {
  const { alt = "image", ...rest } = props;
  const hasFill = "fill" in props;

  return (
    <Image
      loading="lazy"
      alt={alt}
      {...rest}
      width={!hasFill ? props.width ?? 100 : undefined}
      height={!hasFill ? props.height ?? 100 : undefined}
    />
  );
}
