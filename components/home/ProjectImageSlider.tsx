"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImageSliderProps {
  images: string[];
  alt: string;
}

export function ProjectImageSlider({ images, alt }: ProjectImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(next, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem]">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`${alt} ${index + 1}`}
            fill
            className="object-cover transition-transform duration-[6000ms] hover:scale-105"
            sizes="(max-width:1024px)100vw,50vw"
          />
        </div>
      ))}

      {/* Left Arrow */}
      {images.length > 1 && (
        <button
          onClick={previous}
          className="absolute left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition hover:bg-black/60"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Right Arrow */}
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition hover:bg-black/60"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index ? "h-2 w-8 bg-white" : "h-2 w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
