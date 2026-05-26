import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { ResourceFilter } from "@/components/interactive/ResourceFilter";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { contact, whatsAppUrl } from "@/lib/site";
import { featuredPublishers, resourceStats } from "@/content/resources";

export const metadata = pageMetadata({
  title: "Trusted Resources",
  description:
    "A curated library of sound biblical literature, gospel tracts, audio ministry, and Bible study tools from trusted assembly publishers.",
  path: "/resources",
  image: "/images/resources-hero.jpg",
});

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])} />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden sm:h-[70vh]">
        <Image src="/images/resources-hero.jpg" alt="A library of biblical resources" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="section-container w-full">
            <Reveal x={-30} y={0}>
              <div className="max-w-xl">
                <SectionLabel tone="primary" className="mb-4 sm:mb-5">Library</SectionLabel>
                <h1 className="font-heading text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Trusted
                  <br />
                  <span className="text-primary">Resources</span>
                </h1>
                <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-base">
                  A curated collection of sound biblical literature, gospel tracts, audio ministry,
                  and study tools from trusted assembly publishers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-card">
        <div className="section-container py-6 sm:py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {resourceStats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon name={s.icon} className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="font-heading text-xl font-bold leading-none text-foreground sm:text-2xl">{s.value}</p>
                  <p className="mt-0.5 font-body text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured publishers */}
      <section className="section-container py-16 sm:py-20 md:py-28">
        <SectionLabel className="mb-6">Featured</SectionLabel>
        <h2 className="mb-10 font-heading text-2xl font-semibold text-foreground sm:text-3xl md:mb-14 md:text-4xl">
          Assembly <span className="text-primary">Publishers</span>
        </h2>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {featuredPublishers.map((pub, i) => (
            <Reveal key={pub.name} delay={i * 0.08} y={20}>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full overflow-hidden rounded-sm border border-border bg-card transition-colors duration-500 hover:border-primary/40"
              >
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <Image src={pub.image} alt={pub.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="rounded-sm px-2 py-0.5 font-body text-[9px] uppercase tracking-wider text-teal-light sm:text-[10px]" style={{ background: "hsl(174,62%,35%,0.25)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                      {pub.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                  </div>
                  <p className="font-body text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {pub.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* All resources (filterable) */}
      <section className="bg-foreground">
        <div className="section-container py-16 sm:py-20 md:py-28">
          <SectionLabel tone="light" className="mb-6">Browse</SectionLabel>
          <h2 className="mb-8 font-heading text-2xl font-semibold text-white sm:mb-10 sm:text-3xl md:text-4xl">
            All <span className="text-primary">Resources</span>
          </h2>
          <ResourceFilter />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image src="/images/resource-study.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="section-container relative py-16 text-center sm:py-20 md:py-24">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-primary-foreground sm:text-3xl md:text-4xl">
            Suggest a Resource
          </h2>
          <p className="mx-auto mb-8 max-w-md font-body text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            Know of a trusted assembly resource we should feature? We&apos;d love to hear from you
            and grow this library together.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={`mailto:${contact.emailSuggestions}?subject=Resource%20Suggestion`}
              className="inline-flex items-center gap-2 rounded-sm bg-background px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              Email Us a Suggestion
            </a>
            <a
              href={whatsAppUrl("Hello, I'd like to suggest a resource for Assembly Truth")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
