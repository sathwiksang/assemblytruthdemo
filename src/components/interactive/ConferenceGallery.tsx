"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryPhoto } from "@/content/conference";

export function ConferenceGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = (i: number) => setIndex(i);
  const close = useCallback(() => {
    setIndex((current) => {
      if (current !== null) triggerRefs.current[current]?.focus();
      return null;
    });
  }, []);
  const step = useCallback(
    (dir: number) =>
      setIndex((current) =>
        current === null ? current : (current + dir + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const active = index === null ? null : photos[index];

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
        {photos.map((photo, i) => {
          const tall = i === 0 || i === 3 || i === 6;
          const wide = i === 0;
          return (
            <li
              key={photo.src}
              className={`${tall ? "row-span-2" : ""} ${wide ? "col-span-2" : ""}`}
            >
              <button
                type="button"
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                onClick={() => open(i)}
                className="group relative block h-full w-full overflow-hidden"
                style={{ minHeight: tall ? 320 : 160 }}
                aria-label={`View photo: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/40" />
                <span className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-3 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4">
                  <span className="mb-0.5 block font-body text-[10px] uppercase tracking-[0.2em] text-primary">
                    {photo.category}
                  </span>
                  <span className="block font-heading text-sm font-semibold text-white sm:text-base">
                    {photo.alt}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {active && index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.alt} — image ${index + 1} of ${photos.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            ref={closeRef}
            onClick={close}
            className="absolute right-4 top-4 p-2 text-white/70 transition-colors hover:text-white sm:right-6 sm:top-6"
            aria-label="Close"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20 sm:left-6 sm:p-3"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-white sm:h-6 sm:w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20 sm:right-6 sm:p-3"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-white sm:h-6 sm:w-6" aria-hidden="true" />
          </button>

          <figure
            className="flex w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <figcaption className="mt-4 text-center">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-primary">
                {active.category}
              </p>
              <p className="mt-1 font-heading text-base font-semibold text-white sm:text-lg">
                {active.alt}
              </p>
              <p className="mt-1 font-body text-xs text-white/40">
                {index + 1} / {photos.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
