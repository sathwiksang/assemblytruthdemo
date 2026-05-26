import type { MetadataRoute } from "next";
import { navLinks } from "@/lib/site";
import { canonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return navLinks.map((link) => ({
    url: canonicalUrl(link.href),
    lastModified,
    changeFrequency: link.href === "/" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));
}
