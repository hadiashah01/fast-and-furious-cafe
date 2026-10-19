"use client";

import Image from "next/image";
import { useState } from "react";

export default function MenuImage({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return null;

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        unoptimized
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
