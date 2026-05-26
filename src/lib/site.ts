/**
 * Central site configuration. Single source of truth for URLs, navigation,
 * contact details, and social links so pages stay consistent and metadata
 * stays correct.
 *
 * NOTE: deployed to GitHub Pages with the custom domain assemblytruth.org,
 * which serves at the root (no basePath). The `public/CNAME` file tells Pages
 * the custom domain. Override the URL at build time with NEXT_PUBLIC_SITE_URL.
 * The WhatsApp number is the real magazine-subscription contact carried over
 * from the old site (the old conference/resources CTAs used a placeholder
 * `919999999999`, which has been removed). Confirm before launch.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://assemblytruth.org"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Assembly Truth",
  nameTelugu: "అసెంబ్లీ ట్రూత్",
  org: "Bethany Christian Media",
  tagline: "Proclaiming Biblical Truths",
  description:
    "Dedicated to edifying the local assembly with sound doctrine, equipping believers for every good work. A ministry of Bethany Christian Media.",
  url: SITE_URL,
  locale: "en_IN",
  youtube: "https://www.youtube.com/@AssemblyMedia",
} as const;

/** Primary navigation — drives both the header and the sitemap. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Magazine", href: "/magazine" },
  { label: "Conference", href: "/conference" },
  { label: "Resources", href: "/resources" },
  { label: "What We Believe", href: "/beliefs" },
] as const;

export const contact = {
  emailPrimary: "info@assemblytruth.org",
  emailSuggestions: "assemblytruth@gmail.com",
  // 91 (India) + number. Used for all WhatsApp CTAs.
  whatsappNumber: "919705239970",
  people: [
    { name: "John Lee", phone: "949 129 1814", tel: "+919491291814" },
    { name: "Samuel Silas", phone: "970 523 9970", tel: "+919705239970" },
  ],
} as const;

export const MAGAZINE_SUBSCRIPTION_MESSAGE =
  "Hello, I want to subscribe to Believers Magazine";

export function whatsAppUrl(message?: string): string {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const socialLinks = [
  { name: "YouTube", href: siteConfig.youtube },
  { name: "Spotify", href: "#" },
  { name: "WhatsApp", href: whatsAppUrl() },
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
] as const;
