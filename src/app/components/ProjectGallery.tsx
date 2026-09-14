"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div>
      <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black/5">
        <Image
          src={images[activeIndex]}
          alt={`${title} — image ${activeIndex + 1}`}
          width={1600}
          height={1600}
          className="max-h-[80vh] w-auto max-w-full object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous image"
              className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
            >
              →
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <span className="font-body text-[11px] uppercase tracking-[0.12em] text-black/40">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>

          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  index === activeIndex
                    ? "bg-black"
                    : "bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}