import Image from "next/image";
import { Play, Mic2, Users, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { ConferenceGallery } from "@/components/interactive/ConferenceGallery";
import { ConferencePlaylists } from "@/components/interactive/ConferencePlaylists";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL, siteConfig, whatsAppUrl } from "@/lib/site";
import { galleryPhotos, timeline, playlists, expectations, conferenceStats } from "@/content/conference";

export const metadata = pageMetadata({
  title: "Assembly Truth Conference",
  description:
    "The annual Assembly Truth Conference — expository teaching, sweet fellowship, and the breaking of bread. Watch past sessions and register to join believers from across India.",
  path: "/conference",
  image: "/images/conference-hero.jpg",
});

// NOTE (human review): add the next conference's startDate and venue before
// relying on Event rich results. Emitting a fabricated date is intentionally avoided.
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Assembly Truth Conference",
  description:
    "Annual gathering for expository Bible teaching, worship, and fellowship around the Lord's table.",
  organizer: { "@id": `${SITE_URL}/#organization` },
  location: { "@type": "Country", name: "India" },
  url: `${SITE_URL}/conference`,
  image: `${SITE_URL}/images/conference-hero.jpg`,
};

export default function ConferencePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Conference", path: "/conference" }])} />
      <JsonLd data={eventJsonLd} />

      {/* Hero */}
      <section className="relative h-screen max-h-[900px] min-h-[600px] overflow-hidden">
        <Image src="/images/conference-hero.jpg" alt="Assembly Truth Conference" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="section-container w-full pb-16 sm:pb-20 md:pb-28">
            <Reveal y={20}>
              <div className="mb-5 h-px w-12 bg-primary" />
              <p className="mb-3 font-body text-[10px] font-medium uppercase tracking-[0.35em] text-primary sm:mb-4 sm:text-xs">
                Annual Gathering · India
              </p>
              <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Assembly Truth
                <br />
                <span className="italic text-primary">Conference</span>
              </h1>
              <p className="mt-5 max-w-lg font-body text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-base md:text-lg">
                Where believers gather to feast on the Word of God — expository teaching, sweet
                fellowship, and the breaking of bread.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-10">
                {conferenceStats.map((s) => (
                  <div key={s.label}>
                    <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">{s.val}</p>
                    <p className="mt-0.5 font-body text-[10px] uppercase tracking-wider text-white/45 sm:text-xs">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-container py-20 sm:py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel className="mb-6">Experience</SectionLabel>
            <h2 className="mb-10 font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl md:text-4xl">
              What to <span className="italic text-primary">Expect</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {expectations.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08} y={20}>
                  <div className="group">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon name={item.icon} className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-1.5 font-heading text-base font-semibold text-foreground sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} x={30} y={0}>
            <div className="relative mx-auto aspect-[4/5] max-w-md">
              <div className="absolute right-0 top-0 h-[70%] w-[75%] overflow-hidden rounded-sm shadow-2xl">
                <Image src="/images/conference-speaker.jpg" alt="Conference speaker" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 h-[70%] w-[75%] overflow-hidden rounded-sm border-4 border-background shadow-2xl">
                <Image src="/images/conference-worship.jpg" alt="Worship session" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="absolute bottom-[15%] right-[10%] rounded-sm bg-primary px-4 py-2 shadow-lg">
                <p className="font-heading text-xl font-bold text-primary-foreground">2025</p>
                <p className="font-body text-[9px] uppercase tracking-wider text-primary-foreground/70">Conference</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/50">
        <div className="section-container py-20 sm:py-24 md:py-32">
          <SectionLabel className="mb-6">History</SectionLabel>
          <h2 className="mb-12 font-heading text-2xl font-semibold text-foreground sm:text-3xl md:mb-16 md:text-4xl">
            Conference <span className="italic text-primary">Timeline</span>
          </h2>
          <div className="flex flex-col gap-6 sm:gap-8">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06} x={-30} y={0}>
                <div className="group rounded-sm border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/30 hover:shadow-lg sm:p-7">
                  <div className="mb-4">
                    <span className="font-heading text-3xl font-bold text-primary sm:text-4xl">{t.year}</span>
                    <h3 className="mt-1 font-heading text-lg font-semibold text-foreground sm:text-xl">
                      &ldquo;{t.theme}&rdquo;
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    {[
                      { icon: Play, val: `${t.sessions} Sessions` },
                      { icon: Mic2, val: `${t.speakers} Speakers` },
                      { icon: Users, val: `${t.attendees} Attendees` },
                    ].map((stat) => (
                      <div key={stat.val} className="flex items-center gap-2">
                        <stat.icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        <span className="font-body text-xs text-muted-foreground sm:text-sm">{stat.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-container py-20 sm:py-24 md:py-32">
        <SectionLabel className="mb-6">Gallery</SectionLabel>
        <h2 className="mb-10 font-heading text-2xl font-semibold text-foreground sm:text-3xl md:mb-14 md:text-4xl">
          Conference <span className="italic text-primary">Moments</span>
        </h2>
        <ConferenceGallery photos={galleryPhotos} />
      </section>

      {/* Playlists */}
      <section className="bg-foreground">
        <div className="section-container py-20 sm:py-24 md:py-32">
          <SectionLabel tone="light" className="mb-6">Watch &amp; Listen</SectionLabel>
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 md:flex-row md:items-end md:justify-between">
            <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Conference <span className="italic text-primary">Playlists</span>
            </h2>
            <a
              href={siteConfig.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs text-primary transition-colors hover:text-primary/80 sm:text-sm"
            >
              View all on YouTube <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          <ConferencePlaylists playlists={playlists} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image src="/images/conference-crowd.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="section-container relative py-20 sm:py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 font-body text-[10px] font-medium uppercase tracking-[0.3em] text-primary-foreground/60 sm:text-xs">
              Next Gathering
            </p>
            <h2 className="mb-5 font-heading text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl md:text-5xl">
              Join Us at the <span className="italic">Next Conference</span>
            </h2>
            <p className="mb-10 font-body text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
              The Assembly Truth Conference is a time of rich ministry, fellowship around God&apos;s
              Word, and encouragement for the journey ahead.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={whatsAppUrl("Hello, I would like to register for the Assembly Truth Conference")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-background px-8 py-3.5 font-body text-sm font-medium text-foreground transition-colors hover:bg-background/90 sm:w-auto"
              >
                Register via WhatsApp
              </a>
              <a
                href={siteConfig.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-primary-foreground/25 px-8 py-3.5 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto"
              >
                <Play className="h-4 w-4" aria-hidden="true" /> Watch Past Conferences
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
