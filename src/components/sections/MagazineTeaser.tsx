import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { num: "4", label: "Issues / Year" },
  { num: "2", label: "Languages" },
  { num: "₹250", label: "Per Year" },
];

export function MagazineTeaser() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/hero-bible.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsla(210,11%,10%,0.92) 0%, hsla(210,11%,10%,0.88) 50%, hsla(174,62%,20%,0.85) 100%)",
          }}
        />
      </div>

      <div className="section-container relative py-24 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="order-2 md:order-1 md:col-span-6 lg:col-span-7">
            <SectionLabel tone="light" className="mb-6">Latest Publication</SectionLabel>

            <Reveal delay={0.1} x={20} y={0}>
              <h2 className="mb-2 font-heading text-4xl font-extralight leading-[0.95] text-white md:text-5xl lg:text-6xl">
                Believers
                <br />
                <span className="font-semibold italic text-teal-light">Magazine</span>
              </h2>
              <p lang="te" className="font-telugu mb-8 mt-3 text-sm italic text-teal-light/60 md:text-base">
                బిలీవర్స్ మ్యాగజీన్
              </p>
            </Reveal>

            <Reveal delay={0.2} y={14}>
              <p className="mb-8 max-w-md font-body text-sm font-light leading-[1.9] text-white/50">
                Launched January 2026, dedicated to edifying believers and equipping local
                assemblies with sound biblical teaching.
              </p>
            </Reveal>

            <Reveal delay={0.3} y={10}>
              <div className="mb-10 flex items-center gap-8">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-8">
                    <div className="text-center">
                      <span className="block font-heading text-3xl font-light leading-none text-teal-light md:text-4xl">
                        {stat.num}
                      </span>
                      <span className="mt-1 block font-body text-[9px] uppercase tracking-[0.2em] text-white/30">
                        {stat.label}
                      </span>
                    </div>
                    {i < stats.length - 1 && <span className="h-8 w-px bg-white/10" />}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4} y={10}>
              <Link
                href="/magazine"
                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-teal-dark"
              >
                Read Current Issue
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:col-span-6 lg:col-span-5">
            <Reveal delay={0.2} y={20}>
              <div className="relative">
                <div
                  className="absolute -inset-12 opacity-20 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(174,62%,35%), transparent 70%)" }}
                />
                <div className="absolute -left-3 -top-3 h-8 w-8 border-l border-t border-teal-light/30" />
                <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b border-r border-teal-light/30" />
                <Image
                  src="/images/magazine-cover.jpg"
                  alt="Believers Magazine — January to March 2026"
                  width={320}
                  height={448}
                  className="relative z-10 w-56 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] md:w-64 lg:w-72"
                />
                <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 bg-primary px-4 py-1.5">
                  <span className="font-body text-[9px] font-medium uppercase tracking-[0.2em] text-primary-foreground">
                    Vol. 1 · Issue 1
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
