"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { Playlist } from "@/content/conference";

export function ConferencePlaylists({ playlists }: { playlists: Playlist[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = playlists[active];

  const select = (i: number) => {
    setActive(i);
    setPlaying(false); // back to facade when switching playlists
  };

  return (
    <div>
      <div className="mb-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {playlists.map((pl, i) => (
          <button
            key={pl.embedId}
            type="button"
            onClick={() => select(i)}
            aria-pressed={active === i}
            className={`group relative overflow-hidden rounded-sm border text-left transition-all duration-300 ${
              active === i
                ? "border-primary shadow-[0_0_30px_-8px_hsl(174,62%,35%,0.4)]"
                : "border-white/10 hover:border-primary/30"
            }`}
          >
            <span className="relative block h-32 overflow-hidden sm:h-36">
              <Image
                src={pl.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
              {active === i && <span className="absolute left-0 right-0 top-0 h-1 bg-primary" />}
              <span
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  active === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/90">
                  <Play className="ml-0.5 h-4 w-4 text-primary-foreground" aria-hidden="true" />
                </span>
              </span>
            </span>
            <span className="block p-3 sm:p-4">
              <span className="mb-1 block font-heading text-sm font-semibold leading-tight text-white transition-colors group-hover:text-primary sm:text-base">
                {pl.title}
              </span>
              <span className="block font-body text-[10px] text-white/40 sm:text-xs">
                {pl.year} · {pl.videoCount} videos
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${current.embedId}`}
            title={current.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play ${current.title}`}
          >
            <Image
              src={current.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-foreground/50 transition-colors group-hover:bg-foreground/40" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg transition-transform group-hover:scale-110">
                <Play className="ml-1 h-7 w-7 text-primary-foreground" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
            {current.title}
          </h3>
          <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-white/50">
            {current.description}
          </p>
        </div>
        <span className="flex-shrink-0 font-body text-xs text-white/30">
          {current.videoCount} videos
        </span>
      </div>
    </div>
  );
}
