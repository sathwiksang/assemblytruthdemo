import { ExternalLink, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { JsonLd } from "@/components/ui/JsonLd";
import { PromoVideo } from "@/components/interactive/PromoVideo";
import { ConferenceGallery } from "@/components/interactive/ConferenceGallery";
import { ConferencePlaylists } from "@/components/interactive/ConferencePlaylists";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL, siteConfig, whatsAppUrl } from "@/lib/site";
import { galleryPhotos, playlists, promo, registrationTiers } from "@/content/conference";

export const metadata = pageMetadata({
  title: "Assembly Truth Conference",
  description:
    "The annual Assembly Truth Conference — watch the latest promo, browse past session playlists and the photo gallery, and register (Individual ₹250, Families ₹500, Evangelists ₹200) via WhatsApp.",
  path: "/conference",
  image: "/images/conference/promo-thumb.jpg",
});

const REGISTER_MESSAGE =
  "Hello, I would like to register for the Assembly Truth Conference";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Assembly Truth Conference",
  description:
    "Annual gathering for expository Bible teaching, worship, and fellowship around the Lord's table.",
  organizer: { "@id": `${SITE_URL}/#organization` },
  location: { "@type": "Country", name: "India" },
  url: `${SITE_URL}/conference`,
  image: `${SITE_URL}/images/conference/promo-thumb.jpg`,
  offers: registrationTiers.map((t) => ({
    "@type": "Offer",
    name: t.label,
    price: t.price.replace(/[^0-9]/g, ""),
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/conference/#register`,
  })),
};

export default function ConferencePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Conference", path: "/conference" }])} />
      <JsonLd data={eventJsonLd} />

      {/* ───────── 1. LATEST PROMO & FLYER ───────── */}
      <section className="relative overflow-hidden bg-foreground">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, hsl(174,62%,25%,0.4) 0%, transparent 60%), radial-gradient(ellipse at 85% 80%, hsl(174,45%,20%,0.3) 0%, transparent 55%)",
          }}
        />
        <div className="section-container relative py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal y={12}>
              <p className="mb-4 font-body text-[10px] font-medium uppercase tracking-[0.35em] text-primary sm:text-xs">
                Annual Gathering · India
              </p>
            </Reveal>
            <Reveal delay={0.1} y={18}>
              <h1 className="font-heading text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Assembly Truth <span className="italic text-primary">Conference</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2} y={12}>
              <p className="mx-auto mt-5 max-w-xl font-body text-sm leading-relaxed text-white/55 md:text-base">
                Where believers gather to feast on the Word of God — expository teaching and
                sweet fellowship.
              </p>
            </Reveal>
            <Reveal delay={0.3} y={12}>
              <a
                href="#register"
                className="group mt-8 inline-flex items-center gap-2 bg-primary px-8 py-3.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-teal-dark"
              >
                Register Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 max-w-4xl">
            <Reveal delay={0.15} y={16}>
              <SectionLabel tone="light" align="center" className="mb-6">
                Latest Promo &amp; Flyer
              </SectionLabel>
              <PromoVideo videoId={promo.videoId} thumbnail={promo.thumbnail} title={promo.title} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── 2. PAST CONFERENCE PLAYLISTS ───────── */}
      <section className="bg-foreground">
        <div className="section-container border-t border-white/[0.06] py-20 sm:py-24 md:py-28">
          <SectionLabel tone="light" className="mb-6">Watch &amp; Listen</SectionLabel>
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 md:flex-row md:items-end md:justify-between">
            <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Past Conference <span className="italic text-primary">Playlists</span>
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

      {/* ───────── 3. GALLERY ───────── */}
      <section className="section-container py-20 sm:py-24 md:py-32">
        <SectionLabel className="mb-6">Gallery</SectionLabel>
        <h2 className="mb-10 font-heading text-2xl font-semibold text-foreground sm:text-3xl md:mb-14 md:text-4xl">
          Conference <span className="italic text-primary">Moments</span>
        </h2>
        <ConferenceGallery photos={galleryPhotos} previewCount={6} />
      </section>

      {/* ───────── 4. REGISTER NOW ───────── */}
      <section id="register" className="relative overflow-hidden bg-foreground scroll-mt-24">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, hsl(174,62%,25%,0.35) 0%, transparent 60%)",
          }}
        />
        <div className="section-container relative py-20 sm:py-24 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel align="center" tone="light" className="mb-4">Join Us</SectionLabel>
            <h2 className="mb-3 font-heading text-3xl font-light text-white md:text-4xl lg:text-5xl">
              Register <span className="font-medium italic text-teal-light">Now</span>
            </h2>
            <p className="mb-12 font-body text-sm leading-relaxed text-white/55 md:text-base">
              Reserve your place at the next Assembly Truth Conference. Choose your registration
              below and confirm with us on WhatsApp.
            </p>

            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              {registrationTiers.map((tier) => (
                <Reveal key={tier.label} y={16}>
                  <div className="flex h-full flex-col items-center rounded-sm border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-primary/40">
                    <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                    </span>
                    <p className="font-heading text-3xl font-bold text-teal-light md:text-4xl">{tier.price}</p>
                    <p className="mt-1 font-body text-sm font-semibold uppercase tracking-wider text-white/90">
                      {tier.label}
                    </p>
                    <p className="mt-0.5 font-body text-[11px] uppercase tracking-wider text-white/35">
                      {tier.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <a
              href={whatsAppUrl(REGISTER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 bg-primary px-10 py-4 font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-teal-dark sm:w-auto"
            >
              Register via WhatsApp
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
