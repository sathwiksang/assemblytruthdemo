import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cards = [
  { title: "Current Magazine", subtitle: "Vol. 1 · Issue 1", image: "/images/card-ocean.jpg", href: "/magazine" },
  { title: "Audio & Video", subtitle: "Messages & Teaching", image: "/images/card-hills.jpg", href: "/resources" },
  { title: "Conference", subtitle: "Annual Gathering", image: "/images/card-sunrise.jpg", href: "/conference" },
  { title: "What We Believe", subtitle: "Our Convictions", image: "/images/card-bible.jpg", href: "/beliefs" },
];

export function PhotoCardGrid() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="section-container">
        <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel className="mb-5">Discover</SectionLabel>
            <Reveal delay={0.1} y={12}>
              <h2 className="font-heading text-3xl font-light leading-[1.1] text-foreground md:text-4xl lg:text-[2.8rem]">
                Explore our <span className="font-semibold italic">ministry</span>
              </h2>
            </Reveal>
          </div>
          <div className="flex items-end md:col-span-5 md:col-start-8">
            <Reveal delay={0.2} y={10}>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                From quarterly magazines to conference teaching — resources crafted to
                strengthen your walk with the Lord.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-3 md:grid-cols-12 md:gap-4">
          {/* Large featured */}
          <Card card={cards[0]} className="col-span-6 aspect-[4/3] md:col-span-7 md:aspect-[16/10]" large priority />

          {/* Stacked pair */}
          <div className="col-span-6 grid grid-cols-2 gap-3 md:col-span-5 md:grid-cols-1 md:gap-4">
            <Card card={cards[1]} className="aspect-[3/2] md:h-full" />
            <Card card={cards[2]} className="aspect-[3/2] md:h-full" />
          </div>

          {/* Full-width bottom */}
          <Card card={cards[3]} className="col-span-6 aspect-[2.5/1] md:col-span-12 md:aspect-[4/1]" large wide />
        </div>
      </div>
    </section>
  );
}

function Card({
  card,
  className,
  large,
  wide,
  priority,
}: {
  card: (typeof cards)[number];
  className: string;
  large?: boolean;
  wide?: boolean;
  priority?: boolean;
}) {
  return (
    <Link href={card.href} className={`group relative overflow-hidden ${className}`}>
      <Image
        src={card.image}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0"
        style={{
          background: wide
            ? "linear-gradient(to right, hsla(210,11%,10%,0.85) 0%, hsla(210,11%,10%,0.4) 60%, transparent 100%)"
            : "linear-gradient(to top, hsla(210,11%,10%,0.8) 0%, hsla(210,11%,10%,0.15) 50%, transparent 100%)",
        }}
      />
      <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-700 group-hover:scale-x-100" />
      <div className={`absolute inset-0 flex flex-col justify-end p-4 ${large ? "md:p-8" : "md:p-6"}`}>
        <p className="mb-1.5 font-body text-[10px] uppercase tracking-[0.25em] text-teal-light">
          {card.subtitle}
        </p>
        <h3
          className={`font-heading font-semibold text-white transition-transform duration-500 group-hover:translate-x-1 ${
            large ? "text-2xl md:text-3xl" : "text-base md:text-xl"
          }`}
        >
          {card.title}
        </h3>
      </div>
    </Link>
  );
}
