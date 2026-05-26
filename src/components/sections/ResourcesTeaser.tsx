import Link from "next/link";
import { BookOpen, Headphones, Video, Users, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const items = [
  { icon: BookOpen, title: "Magazine", description: "Quarterly biblical exposition in English & Telugu.", href: "/magazine" },
  { icon: Headphones, title: "Audio Messages", description: "Sermons and teaching from gifted Bible teachers.", href: "/resources" },
  { icon: Video, title: "Video Teachings", description: "Conference recordings and Bible study sessions.", href: "/conference" },
  { icon: Users, title: "Trusted Resources", description: "Curated literature from sound assembly publishers.", href: "/resources" },
];

export function ResourcesTeaser() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="section-container py-24 md:py-36">
        <div className="mb-14 flex items-end justify-between md:mb-20">
          <div>
            <SectionLabel className="mb-5">Resources</SectionLabel>
            <Reveal delay={0.1} y={12}>
              <h2 className="font-heading text-3xl font-light leading-[1.1] text-foreground md:text-4xl lg:text-[2.8rem]">
                Tools for the <span className="font-semibold italic">faithful</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} y={8}>
            <Link
              href="/resources"
              className="group hidden items-center gap-2 border border-border px-6 py-3 font-body text-[11px] uppercase tracking-[0.15em] text-foreground transition-all hover:border-primary hover:text-primary md:inline-flex"
            >
              View All
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} y={16}>
              <Link
                href={item.href}
                className="group flex h-full items-start gap-5 border border-border/50 bg-background p-6 transition-all duration-500 hover:border-primary/25 hover:shadow-lg md:gap-6 md:p-8"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-border/60 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/5 md:h-14 md:w-14">
                  <item.icon
                    size={22}
                    strokeWidth={1.3}
                    className="text-muted-foreground transition-colors duration-500 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="mb-1.5 block font-heading text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
                    {item.title}
                  </span>
                  <span className="block font-body text-sm font-light leading-relaxed text-muted-foreground">
                    {item.description}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
