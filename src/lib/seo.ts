import type { Metadata } from "next";
import { SITE_URL, siteConfig } from "@/lib/site";

/**
 * Absolute canonical URL for a route. Built from SITE_URL (which may include a
 * GitHub Pages sub-path) with a trailing slash to match `trailingSlash: true`.
 */
export function canonicalUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}/`;
}

/** Absolute URL for a public asset (e.g. an OG image under /images). */
export function assetUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/**
 * Build per-page metadata with sensible, brand-consistent defaults.
 * All URLs are absolute (not relying on metadataBase path resolution, which
 * drops the sub-path), so OG/canonical are correct on the Pages project site.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  /** Public-path image (under /images or /og). Defaults to the brand hero. */
  image?: string;
}): Metadata {
  const url = canonicalUrl(opts.path);
  const image = assetUrl(opts.image ?? "/images/hero-wheat.jpg");
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: opts.title,
      description: opts.description,
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }],
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}

/** schema.org Organization + WebSite, emitted once site-wide in the layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: siteConfig.org,
        alternateName: siteConfig.name,
        url: SITE_URL,
        logo: assetUrl("/favicon.ico"),
        description: siteConfig.description,
        sameAs: [siteConfig.youtube],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: siteConfig.name,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}

/** BreadcrumbList for a page below the home route. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}
