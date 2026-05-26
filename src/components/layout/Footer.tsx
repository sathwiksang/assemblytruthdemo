import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navLinks, siteConfig, socialLinks } from "@/lib/site";
import { SocialGlyph } from "@/components/layout/SocialIcons";

const footerSocials = ["Facebook", "X", "YouTube", "Spotify", "Instagram"];

export function Footer() {
  return (
    <footer className="overflow-hidden bg-foreground">
      {/* Follow row */}
      <div className="section-container py-14 md:py-16">
        <div className="text-center">
          <h2 className="mb-8 font-heading text-2xl font-light text-white/45 sm:text-3xl md:mb-10 md:text-4xl">
            Follow <span className="italic font-medium text-teal-light">{siteConfig.org}</span>
          </h2>
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10">
            {footerSocials.map((name) => (
              <a
                key={name}
                href={
                  socialLinks.find((s) => s.name === name)?.href ?? siteConfig.youtube
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-white/40 transition-colors hover:text-teal-light"
              >
                <SocialGlyph name={name} className="h-7 w-7 sm:h-8 sm:w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Columns */}
      <div className="section-container py-10 md:py-14">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <div>
            <h3 className="mb-1 font-display text-xl font-semibold leading-none text-white sm:text-2xl">
              Assembly<span className="italic text-teal-light"> Truth</span>
            </h3>
            <p lang="te" className="font-telugu mb-3 text-[10px] font-normal text-white/25 sm:text-[11px]">
              {siteConfig.nameTelugu}
            </p>
            <p className="max-w-xs font-body text-xs leading-relaxed text-white/30">
              A ministry of {siteConfig.org} — proclaiming biblical truths for the edification
              of the local assembly.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 font-body text-[10px] font-medium uppercase tracking-[0.25em] text-white/20">
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center gap-1.5 font-body text-xs text-white/40 transition-colors hover:text-teal-light"
                >
                  <ArrowRight
                    className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <p className="mb-4 font-body text-[10px] font-medium uppercase tracking-[0.25em] text-white/20">
              Stay Connected
            </p>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 font-body text-xs text-white/40 transition-colors hover:text-teal-light"
                >
                  <ArrowRight
                    className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  {l.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 h-px bg-white/[0.06]" />

        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="font-body text-[10px] tracking-wide text-white/20">
            &copy; 2026 {siteConfig.org}. All rights reserved.
          </p>
          <p className="font-body text-[10px] tracking-wide text-white/20">
            For Private Circulation Only
          </p>
        </div>
      </div>
    </footer>
  );
}
