import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-foreground">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-wheat.jpg"
          alt="Golden wheat field at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsla(210,11%,10%,0.6) 0%, hsla(174,62%,18%,0.4) 40%, hsla(210,11%,10%,0.75) 100%)",
          }}
        />
      </div>

      <div className="relative flex min-h-[80vh] items-center md:min-h-[88vh]">
        <div className="section-container w-full">
          <div className="max-w-3xl">
            <Reveal delay={0.1} y={12}>
              <p className="mb-6 font-body text-[10px] font-light uppercase tracking-[0.4em] text-teal-light md:text-xs">
                {siteConfig.org}
              </p>
            </Reveal>

            <Reveal delay={0.2} y={20}>
              <h1 className="mb-8 font-heading text-[3.2rem] font-extralight leading-[0.9] tracking-[-0.02em] text-white md:text-[5.5rem] lg:text-[7rem]">
                Proclaiming
                <br />
                <span className="font-medium italic text-teal-light">Biblical</span>
                <br />
                Truths
              </h1>
            </Reveal>

            <Reveal delay={0.35} y={14}>
              <div className="mb-12 flex items-start gap-6">
                <span className="mt-1 h-14 w-px flex-shrink-0 bg-teal-light/30" />
                <p className="max-w-sm font-body text-sm font-light leading-[1.7] text-white/55 md:text-[15px]">
                  Dedicated to edifying the local assembly with sound doctrine, equipping
                  believers for every good work.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5} y={12}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/magazine"
                  className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-teal-dark"
                >
                  Read Magazine
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center border border-white/20 px-8 py-4 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:bg-white/10"
                >
                  Explore Resources
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
