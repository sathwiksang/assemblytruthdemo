"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";

/** Accessible mobile nav: toggle button + disclosure panel with Esc-to-close. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="p-2 text-foreground"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          className="absolute left-0 right-0 top-full border-t border-border bg-background"
        >
          <div className="section-container flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/30 py-3 font-body text-sm font-medium tracking-wide text-foreground last:border-0 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
