"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/** Single YouTube promo with a click-to-load facade (privacy + performance). */
export function PromoVideo({
  videoId,
  thumbnail,
  title,
}: {
  videoId: string;
  thumbnail: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play: ${title}`}
        >
          <Image src={thumbnail} alt="" fill priority sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" />
          <span className="absolute inset-0 bg-foreground/40 transition-colors group-hover:bg-foreground/30" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
              <Play className="ml-1 h-7 w-7 text-primary-foreground sm:h-9 sm:w-9" aria-hidden="true" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
