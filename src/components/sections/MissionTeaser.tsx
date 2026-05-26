import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { num: "01", title: "Edify", text: "Building up believers through sound biblical exposition and doctrinal teaching in English and Telugu." },
  { num: "02", title: "Equip", text: "Providing practical resources — magazines, audio, and video — to strengthen local assemblies for every good work." },
  { num: "03", title: "Encourage", text: "Freely distributing materials from Bethany to encourage faithfulness to the Word of God." },
];

export function MissionTeaser() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="section-container">
        <div className="mb-16 text-center md:mb-24">
          <Reveal y={10}>
            <p className="mb-4 font-body text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
              Our Mission
            </p>
          </Reveal>
          <Reveal delay={0.1} y={14}>
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extralight leading-[1.05] text-foreground md:text-5xl lg:text-[3.5rem]">
              Proclaiming the <span className="font-semibold italic text-primary">whole counsel</span> of
              God to the local assembly
            </h2>
          </Reveal>
        </div>

        <div className="grid border border-border md:grid-cols-3">
          {pillars.map((item, i) => (
            <Reveal key={item.num} delay={0.1 + i * 0.1} y={16}>
              <div className={`h-full p-8 md:p-10 lg:p-12 ${i < 2 ? "border-b border-border md:border-b-0 md:border-r" : ""}`}>
                <span className="mb-6 block font-heading text-5xl font-extralight text-border/80 md:text-6xl">
                  {item.num}
                </span>
                <h3 className="mb-3 font-heading text-2xl font-semibold text-foreground md:text-3xl">
                  {item.title}
                </h3>
                <p className="font-body text-sm font-light leading-[1.8] text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} y={10}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
            <p className="text-center font-body text-sm font-light text-muted-foreground sm:text-left">
              All resources are freely distributed for private circulation.
            </p>
            <Link
              href="/beliefs"
              className="group inline-flex flex-shrink-0 items-center gap-3 font-body text-[11px] font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
            >
              <span>Read Our Beliefs</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
