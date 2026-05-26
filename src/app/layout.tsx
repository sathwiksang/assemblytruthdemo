import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Outfit,
  Playfair_Display,
  Noto_Sans_Telugu,
} from "next/font/google";
import "./globals.css";
import { SITE_URL, siteConfig } from "@/lib/site";
import { organizationJsonLd, canonicalUrl, assetUrl } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const telugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-telugu",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.org }],
  alternates: { canonical: canonicalUrl("/") },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: canonicalUrl("/"),
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: assetUrl("/images/hero-wheat.jpg"), width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [assetUrl("/images/hero-wheat.jpg")],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${display.variable} ${telugu.variable}`}
    >
      <body>
        <JsonLd data={organizationJsonLd()} />
        <a
          href="#main"
          className="sr-only z-[100] rounded-sm bg-primary px-4 py-2 font-body text-sm text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-screen bg-background">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
