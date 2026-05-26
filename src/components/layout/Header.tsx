import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md">
      <div className="h-0.5 bg-primary" />

      <div className="section-container relative flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex flex-col" aria-label={`${siteConfig.name} — home`}>
          <span className="font-display text-[22px] font-semibold leading-none tracking-tight text-foreground transition-colors group-hover:text-primary md:text-[26px]">
            Assembly<span className="italic text-primary"> Truth</span>
          </span>
          <span
            lang="te"
            className="font-telugu mt-0.5 text-[9px] font-normal tracking-wide text-muted-foreground/60 md:text-[10px]"
          >
            {siteConfig.nameTelugu}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 font-body text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
