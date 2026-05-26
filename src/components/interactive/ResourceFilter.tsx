"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import {
  allResources,
  categories,
  categoryIcon,
  type ResourceCategory,
} from "@/content/resources";

export function ResourceFilter() {
  const [active, setActive] = useState<ResourceCategory | "all">("all");

  const filtered =
    active === "all" ? allResources : allResources.filter((r) => r.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2 sm:mb-12" role="group" aria-label="Filter resources by category">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            aria-pressed={active === cat.id}
            className={`inline-flex items-center gap-2 rounded-sm border px-4 py-2 font-body text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
              active === cat.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-white/15 bg-transparent text-white/60 hover:border-primary/50 hover:text-white"
            }`}
          >
            <Icon name={cat.icon} className="h-3.5 w-3.5" />
            {cat.label}
          </button>
        ))}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {filtered.map((resource, i) => (
          <li key={resource.name}>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full overflow-hidden rounded-sm border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.06] sm:p-6"
            >
              <span className="absolute left-0 top-0 h-0 w-1 rounded-l-sm bg-primary transition-all duration-500 group-hover:h-full" />
              <span className="pointer-events-none absolute right-4 top-3 select-none font-heading text-4xl font-bold text-white/[0.06] sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-primary/15">
                <Icon name={categoryIcon[resource.category]} className="h-4 w-4 text-primary" />
              </span>

              <h3 className="mb-2 pr-8 font-heading text-base font-semibold text-white transition-colors duration-300 group-hover:text-primary sm:text-lg">
                {resource.name}
              </h3>
              <p className="mb-4 font-body text-xs leading-relaxed text-white/50 sm:text-sm">
                {resource.description}
              </p>

              <span className="flex flex-wrap gap-1.5">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm px-2 py-0.5 font-body text-[9px] uppercase tracking-wider text-teal-light sm:text-[10px]"
                    style={{ background: "hsl(174,62%,35%,0.15)" }}
                  >
                    {tag}
                  </span>
                ))}
              </span>

              <span className="mt-4 flex items-center gap-1.5 font-body text-xs text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Visit resource <ChevronRight className="h-3 w-3" aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
