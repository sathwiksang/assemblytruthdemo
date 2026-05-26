import { Reveal } from "@/components/ui/Reveal";

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-12 bg-teal-light/20" />
      <span className="h-1.5 w-1.5 rotate-45 bg-teal-light/40" />
      <span className="h-px w-12 bg-teal-light/20" />
    </div>
  );
}

export function ScriptureSection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-28 md:py-40">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse at 50% 40%, hsl(174,62%,35%), transparent 60%)" }}
      />
      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-10">
              <Divider />
            </div>
          </Reveal>
          <Reveal delay={0.1} y={16}>
            <blockquote>
              <p className="font-heading text-2xl font-extralight italic leading-[1.5] text-white/70 md:text-3xl md:leading-[1.6] lg:text-4xl">
                <span className="font-light not-italic text-teal-light/40">&ldquo;</span>
                All Scripture is given by inspiration of God, and is profitable for doctrine, for
                reproof, for correction, for instruction in righteousness
                <span className="font-light not-italic text-teal-light/40">&rdquo;</span>
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={0.2} y={10}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <cite className="font-body text-[11px] font-medium uppercase not-italic tracking-[0.3em] text-teal-light">
                2 Timothy 3:16
              </cite>
              <Divider />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
