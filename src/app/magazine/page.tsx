import Image from "next/image";
import { BookOpen, Users, Calendar, ArrowRight, Star, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL, contact, whatsAppUrl, MAGAZINE_SUBSCRIPTION_MESSAGE } from "@/lib/site";
import {
  magazineIssues,
  getTotalArticleCount,
  getFeaturedArticles,
  getContributorCount,
  formatArticleCount,
} from "@/content/magazine";

export const metadata = pageMetadata({
  title: "Believers Magazine",
  description:
    "Believers Magazine — a quarterly print publication (₹250/year) edifying believers and equipping local assemblies with sound biblical teaching in English and Telugu.",
  path: "/magazine",
  image: "/images/magazine-cover.jpg",
});

const periodicalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Periodical",
  name: "Believers Magazine",
  inLanguage: ["en", "te"],
  publisher: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/magazine`,
};

export default function MagazinePage() {
  const totalArticles = getTotalArticleCount();
  const featured = getFeaturedArticles();
  const contributors = getContributorCount();
  const subscribeUrl = whatsAppUrl(MAGAZINE_SUBSCRIPTION_MESSAGE);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Magazine", path: "/magazine" }])} />
      <JsonLd data={periodicalJsonLd} />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-foreground">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, hsl(174,62%,25%,0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, hsl(174,45%,20%,0.3) 0%, transparent 50%)",
          }}
        />
        <div className="section-container relative w-full py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <Reveal y={12}>
                <SectionLabel tone="light" className="mb-6">Bethany Christian Media</SectionLabel>
              </Reveal>
              <Reveal delay={0.1} y={16}>
                <h1 className="mb-3 font-heading text-5xl font-light leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
                  Believers
                  <br />
                  <span className="font-medium italic text-teal-light">Magazine</span>
                </h1>
              </Reveal>
              <Reveal delay={0.15} y={12}>
                <p lang="te" className="font-telugu mb-6 text-xl italic text-white/35 md:text-2xl">
                  బిలీవర్స్ మ్యాగజీన్
                </p>
              </Reveal>
              <Reveal delay={0.2} y={12}>
                <p className="mb-8 max-w-lg font-body text-sm font-light leading-relaxed text-white/55 md:text-base">
                  Launched January 2026, dedicated to edifying believers and equipping local
                  assemblies with sound biblical teaching.
                </p>
              </Reveal>
              <Reveal delay={0.3} y={12}>
                <div className="mb-10 flex flex-wrap gap-4">
                  <a
                    href={subscribeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-primary px-7 py-3.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-teal-dark"
                  >
                    Subscribe — ₹250/year
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                  <a
                    href="#issues"
                    className="inline-flex items-center border border-white/20 px-7 py-3.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-primary hover:bg-primary"
                  >
                    Browse Issues
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.4} y={12}>
                <div className="flex gap-8">
                  {[
                    { icon: BookOpen, label: "Articles", value: String(totalArticles) },
                    { icon: Users, label: "Contributors", value: String(contributors) },
                    { icon: Calendar, label: "Since", value: "2026" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2.5">
                      <stat.icon className="h-4 w-4 text-teal-light" aria-hidden="true" />
                      <div>
                        <p className="font-body text-sm font-semibold text-white/90">{stat.value}</p>
                        <p className="font-body text-[10px] uppercase tracking-wider text-white/35">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <Reveal delay={0.3} y={20}>
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full bg-teal-light/20 blur-3xl" />
                  <Image
                    src="/images/magazine-cover.jpg"
                    alt="Believers Magazine — current issue"
                    width={320}
                    height={448}
                    priority
                    className="relative w-60 rounded-sm shadow-2xl md:w-72 lg:w-80"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Issues grid */}
      <section id="issues" className="section-container py-20 md:py-28">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <SectionLabel className="mb-4">Collection</SectionLabel>
            <h2 className="font-heading text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
              Magazine <span className="font-medium italic text-primary">Issues</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-right font-body text-sm text-muted-foreground md:block">
            Each quarterly issue brings sound biblical teaching for the edification of believers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {magazineIssues.map((issue) => (
            <Reveal key={issue.volume} y={16}>
              <article className="group h-full overflow-hidden rounded-sm border border-border/50 bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={issue.cover}
                    alt={`${issue.title} — ${issue.volume}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, hsl(210,11%,10%,0.9) 0%, hsl(210,11%,10%,0.3) 40%, transparent 70%)",
                    }}
                  />
                  {issue.current && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1.5">
                      <Star className="h-3 w-3 text-primary-foreground" aria-hidden="true" />
                      <span className="font-body text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                        Current
                      </span>
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="mb-1.5 font-body text-[10px] font-medium uppercase tracking-[0.3em] text-teal-light">
                      {issue.volume}
                    </p>
                    <h3 className="font-heading text-xl font-semibold leading-tight text-white md:text-2xl">
                      {issue.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-4">
                    <span className="font-body text-xs text-muted-foreground">{issue.date}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="font-body text-xs text-muted-foreground">
                      {formatArticleCount(issue.articles.length)}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="font-body text-xs text-muted-foreground">{issue.pages} pages</span>
                  </div>
                  <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                    {issue.description}
                  </p>
                  <div className="flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-primary">
                    <span>{issue.current ? "Current Issue" : "Coming Soon"}</span>
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured articles */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="section-container py-20 md:py-28">
          <div className="mb-14">
            <SectionLabel tone="light" className="mb-4">From the Current Issue</SectionLabel>
            <h2 className="font-heading text-3xl font-light text-white md:text-4xl lg:text-5xl">
              Featured <span className="font-medium italic text-teal-light">Articles</span>
            </h2>
          </div>
          <div className="grid gap-px bg-white/[0.06] md:grid-cols-2">
            {featured.map((article, i) => (
              <Reveal key={article.title} y={16}>
                <article className="group relative h-full bg-[hsl(210,11%,15%)] p-7 transition-colors duration-500 hover:bg-[hsl(210,11%,18%)] md:p-9">
                  <span className="absolute right-7 top-6 font-heading text-6xl font-light text-teal-light/[0.05] md:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-sm bg-primary/15 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-teal-light">
                        {article.category}
                      </span>
                      <span className="font-body text-[11px] text-white/30">{article.readTime}</span>
                    </div>
                    <h3 className="mb-2 font-heading text-xl font-semibold leading-tight text-white/90 transition-colors duration-300 group-hover:text-primary md:text-2xl">
                      {article.title}
                    </h3>
                    <p className="mb-3 font-body text-xs font-medium uppercase tracking-wider text-teal-light">
                      {article.author}
                    </p>
                    <p className="font-body text-sm leading-relaxed text-white/45">{article.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription + contact */}
      <section className="section-container py-20 md:py-28">
        <div className="mb-14 text-center">
          <SectionLabel align="center" className="mb-4">Access</SectionLabel>
          <h2 className="font-heading text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
            How to Get the <span className="font-medium italic text-primary">Magazine</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-muted-foreground">
            Subscribe annually and receive each quarterly issue delivered to your home.
          </p>
        </div>

        <Reveal y={10}>
          <div className="relative mx-auto max-w-2xl rounded-sm border border-primary/30 bg-primary/[0.03] p-8 md:p-12">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-primary px-4 py-1.5">
              <span className="font-body text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                Annual Subscription
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-heading text-2xl font-semibold text-foreground md:text-3xl">
                Print Subscription
              </h3>
              <p className="mb-5 font-heading text-3xl font-bold text-primary md:text-4xl">
                ₹250 <span className="text-lg font-light text-muted-foreground md:text-xl">/ year</span>
              </p>
              <p className="mb-8 max-w-md font-body text-sm leading-relaxed text-muted-foreground md:text-base">
                Receive the quarterly Believers Magazine delivered to your doorstep — four issues per
                year with 48+ pages of sound biblical teaching.
              </p>
              <ul className="mb-10 grid w-full max-w-lg gap-4 sm:grid-cols-3">
                {[
                  { label: "4 Issues", detail: "Per year" },
                  { label: "48+ Pages", detail: "Each issue" },
                  { label: "Doorstep", detail: "Delivery" },
                ].map((item) => (
                  <li key={item.label} className="rounded-sm border border-border/50 bg-background/60 px-3 py-4">
                    <p className="font-heading text-lg font-semibold text-foreground">{item.label}</p>
                    <p className="mt-0.5 font-body text-[10px] uppercase tracking-wider text-muted-foreground">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <a
                href={subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 bg-primary px-10 py-4 font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-teal-dark sm:w-auto"
              >
                Subscribe via WhatsApp
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Bulk / contact */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="section-container py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel align="center" tone="light" className="mb-4">Get in Touch</SectionLabel>
            <h2 className="mb-2 font-heading text-3xl font-light text-white md:text-4xl lg:text-5xl">
              Ready to <span className="font-medium italic text-teal-light">Subscribe?</span>
            </h2>
            <p className="mb-6 font-heading text-xl font-light italic text-teal-light md:text-2xl">
              Want Bulk Copies?
            </p>
            <p className="mb-10 font-body text-sm leading-relaxed text-white/50 md:text-base">
              Contact us via phone or WhatsApp for more details. We have different prices for bulk orders.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {contact.people.map((person) => (
                <a
                  key={person.tel}
                  href={`tel:${person.tel}`}
                  className="group flex flex-col items-center gap-2 rounded-sm border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-primary/50"
                >
                  <span className="font-body text-xl font-semibold tracking-wide text-white/90 transition-colors group-hover:text-primary md:text-2xl">
                    {person.phone}
                  </span>
                  <span className="font-body text-xs uppercase tracking-wider text-white/35">
                    {person.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
