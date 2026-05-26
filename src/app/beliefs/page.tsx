import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { beliefs, distinctives } from "@/content/beliefs";

export const metadata = pageMetadata({
  title: "What We Believe",
  description:
    "Our statement of faith — we hold no creed but the Holy Scriptures, the inspired and inerrant Word of God. Read the biblical convictions and assembly principles of Assembly Truth.",
  path: "/beliefs",
  image: "/images/beliefs-hero.jpg",
});

export default function BeliefsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "What We Believe", path: "/beliefs" }])} />

      {/* Hero */}
      <section className="relative flex h-screen max-h-[1100px] min-h-[640px] items-center justify-center overflow-hidden bg-foreground">
        <Image src="/images/beliefs-hero.jpg" alt="An open Bible in candlelight" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground" />
        <div className="relative px-5 text-center">
          <Reveal delay={0.1} y={12}>
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-14 bg-primary/50" />
              <p className="font-body text-[10px] font-medium uppercase tracking-[0.45em] text-primary sm:text-xs">
                Statement of Faith
              </p>
              <span className="h-px w-14 bg-primary/50" />
            </div>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <h1 className="font-heading text-5xl font-semibold leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              What We
              <br />
              <span className="italic text-primary">Believe</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3} y={14}>
            <p className="mx-auto mt-7 max-w-md font-body text-sm leading-relaxed text-white/45 sm:text-base">
              We hold no creed but the Holy Scriptures — the unchanging, inspired, and inerrant
              Word of the living God.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Opening scripture */}
      <section className="bg-muted/30">
        <div className="section-container py-24 sm:py-32">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote className="mx-auto mb-6 h-6 w-6 text-primary/20" aria-hidden="true" />
              <blockquote className="font-heading text-2xl italic leading-[1.45] text-foreground sm:text-3xl md:text-[2.1rem]">
                &ldquo;Buy the truth, and sell it not; also wisdom, and instruction, and
                understanding.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-6 bg-primary/25" />
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
                  Proverbs 23:23
                </p>
                <span className="h-px w-6 bg-primary/25" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Beliefs */}
      {beliefs.map((belief, i) => {
        const isDark = i % 2 === 1;
        return (
          <section
            key={belief.id}
            className={isDark ? "bg-foreground text-white" : "bg-background text-foreground"}
          >
            <div className="section-container py-20 sm:py-28 md:py-36">
              <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <Reveal y={20}>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="select-none font-heading text-[80px] font-bold leading-none text-primary/[0.08] sm:text-[100px]">
                        {belief.number}
                      </span>
                      <span className="h-px w-10 bg-primary/30" />
                    </div>
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${isDark ? "bg-primary/15" : "bg-primary/10"}`}>
                      <Icon name={belief.icon} className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="mb-6 font-heading text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.7rem]">
                      {belief.title}
                    </h2>
                    <p className={`max-w-xl font-body text-sm leading-[1.9] sm:text-[15px] ${isDark ? "text-white/55" : "text-muted-foreground"}`}>
                      {belief.body}
                    </p>
                  </Reveal>
                </div>

                <div className={`flex flex-col gap-6 lg:pt-24 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  {belief.verses.map((v, vi) => (
                    <Reveal key={v.ref} delay={vi * 0.08} y={16}>
                      <figure className="relative">
                        <span className="absolute bottom-0 left-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-primary via-primary/40 to-transparent" />
                        <blockquote className={`rounded-sm py-5 pl-6 pr-4 ${isDark ? "bg-white/[0.03]" : "bg-primary/[0.03]"}`}>
                          <Quote className={`mb-3 h-4 w-4 ${isDark ? "text-primary/25" : "text-primary/20"}`} aria-hidden="true" />
                          <p className={`font-heading text-lg italic leading-relaxed sm:text-xl ${isDark ? "text-white/80" : "text-foreground/80"}`}>
                            &ldquo;{v.text}&rdquo;
                          </p>
                          <figcaption className="mt-3 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
                            — {v.ref}
                          </figcaption>
                        </blockquote>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
            <div className={`h-px ${isDark ? "bg-white/[0.06]" : "bg-border/40"}`} />
          </section>
        );
      })}

      {/* Distinctives */}
      <section className="bg-foreground text-white">
        <div className="section-container py-24 sm:py-32 md:py-40">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal y={16}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <p className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-primary">
                    Distinctives
                  </p>
                </div>
                <h2 className="mb-5 font-heading text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
                  Assembly
                  <br />
                  <span className="italic text-primary">Principles</span>
                </h2>
                <p className="max-w-md font-body text-sm leading-[1.8] text-white/40">
                  Assemblies (also known as Gospel Halls and Bible Chapels) follow the pattern of
                  New Testament church doctrine and practice. We recognise no central ecclesiastical
                  authority, no formal creed, no prescribed liturgy, nor any ordained, salaried
                  ministry.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-4">
              {distinctives.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05} y={16}>
                  <div className="group relative overflow-hidden rounded-sm border border-white/[0.06] p-6 transition-all duration-500 hover:border-primary/25 hover:bg-white/[0.02] sm:p-8">
                    <span className="pointer-events-none absolute -right-1 -top-1 select-none font-heading text-[72px] font-bold leading-none text-white/[0.02]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-2 font-heading text-lg font-semibold transition-colors duration-300 group-hover:text-primary sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mb-3 font-body text-xs leading-[1.8] text-white/35 sm:text-sm">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="h-px w-4 bg-primary/30" />
                      <p className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-primary/50">
                        {item.ref}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing scripture */}
      <section className="relative overflow-hidden">
        <Image src="/images/beliefs-hero.jpg" alt="" fill sizes="100vw" className="scale-110 object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="section-container relative py-28 sm:py-36 md:py-44">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote className="mx-auto mb-6 h-7 w-7 text-primary-foreground/15" aria-hidden="true" />
              <blockquote className="font-heading text-2xl italic leading-[1.35] text-primary-foreground sm:text-3xl md:text-4xl lg:text-[2.8rem]">
                &ldquo;Beloved, while I was very diligent to write to you concerning our common
                salvation, I found it necessary to write to you exhorting you to contend earnestly
                for the faith which was once for all delivered to the saints.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-primary-foreground/15" />
                <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/45">
                  Jude 1:3
                </p>
                <span className="h-px w-8 bg-primary-foreground/15" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
