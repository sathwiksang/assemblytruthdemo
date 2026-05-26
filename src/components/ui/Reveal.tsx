"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Lightweight scroll-reveal. Replaces Framer Motion's FadeIn/SlideIn across the
 * site with a single IntersectionObserver + CSS transition — a few hundred bytes
 * of JS instead of a ~40KB animation runtime. Honors prefers-reduced-motion by
 * rendering content immediately with no transform.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  x = 0,
  as: Tag = "div" as ElementType,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translate(${x}px, ${y}px)`,
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        transitionDelay: `${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
