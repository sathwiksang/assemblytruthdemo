"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import type { GalleryPhoto } from "@/content/conference";

export function ConferenceGallery({
  photos,
  previewCount = 6,
}: {
  photos: GalleryPhoto[];
  previewCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const visible = expanded ? photos : photos.slice(0, previewCount);

  const close = useCallback(() => {
    setIndex((current) => {
      if (current !== null) triggerRefs.current[current]?.focus();
      return null;
    });
  }, []);
  const step = useCallback(
    (dir: number) =>
      setIndex((c) => (c === null ? c : (c + dir + photos.length) % photos.length)),
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
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
        {visible.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              onClick={() => setIndex(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden"
              aria-label={`View photo ${i + 1} of ${photos.length}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/30" />
              <span className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </button>
          </li>
        ))}
      </ul>

      {!expanded && photos.length > previewCount && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="group inline-flex items-center gap-2 border border-primary px-7 py-3.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            View all {photos.length} photos
          </button>
        </div>
      )}

      {active && index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${index + 1} of ${photos.length}`}
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

          <figure className="flex w-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[75vh] w-full">
              <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <figcaption className="mt-4 text-center font-body text-xs text-white/40">
              {index + 1} / {photos.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
