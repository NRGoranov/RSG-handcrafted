"use client";

import { useState } from "react";
import Image from "next/image";

type ProductViewerProps = {
  name: string;
  images: string[];
};

export default function ProductViewer({ name, images }: ProductViewerProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* future: replace with GLB viewer */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black/40">
        <Image
          src={activeImage}
          alt={`${name} handbag view`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            className={`focus-ring relative aspect-square overflow-hidden rounded-lg border ${
              activeImage === image ? "border-caramel" : "border-ivory/20"
            }`}
            onClick={() => setActiveImage(image)}
            aria-label={`View ${name} image`}
          >
            <Image src={image} alt={`${name} thumbnail`} fill className="object-cover" sizes="120px" />
          </button>
        ))}
      </div>
    </div>
  );
}
