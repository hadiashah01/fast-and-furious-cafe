"use client";

import Image from "next/image";
import { useState } from "react";

export default function MenuImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  src?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        aria-hidden="true"
        className={`relative overflow-hidden rounded bg-surface-lowest ${className ?? "aspect-[16/9] w-full"}`}
      />
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded bg-surface-lowest ${className ?? "aspect-[16/9] w-full"}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading="lazy"
        unoptimized
        className={`object-cover ${imageClassName ?? ""}`}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
