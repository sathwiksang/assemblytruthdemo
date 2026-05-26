import { cn } from "@/lib/utils";

/**
 * The recurring "— EYEBROW" label used above section headings.
 * `align="center"` adds a matching line on both sides.
 */
export function SectionLabel({
  children,
  align = "left",
  tone = "primary",
  className,
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  tone?: "primary" | "light";
  className?: string;
}) {
  const line = tone === "light" ? "bg-teal-light" : "bg-primary";
  const text = tone === "light" ? "text-teal-light" : "text-primary";
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      <span className={cn("h-px w-10", line)} />
      <span className={cn("font-body text-[11px] font-medium uppercase tracking-[0.4em]", text)}>
        {children}
      </span>
      {align === "center" && <span className={cn("h-px w-10", line)} />}
    </div>
  );
}
