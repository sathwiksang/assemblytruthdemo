# Assembly Truth — Redesign

A statically-generated **Next.js (App Router)** rebuild of the Assembly Truth
website for Bethany Christian Media. Evolves the original brand (teal +
Cormorant Garamond/Outfit, English + Telugu) while fixing the SEO and
performance limits of the old client-rendered React SPA in `../old`.

## Stack

- **Next.js 15** App Router, **React 19**, **TypeScript**
- **Tailwind CSS 3** with the ported brand token system (`src/app/globals.css`)
- Self-hosted fonts via `next/font` (no render-blocking Google Fonts)
- `next/image` for all photography (AVIF/WebP + responsive sizing)
- **No** Framer Motion / React Query / Embla / Radix — interactivity is a few
  small client islands (`src/components/interactive`, `Reveal`, `MobileMenu`)

## Scripts

| command | purpose |
| --- | --- |
| `npm run dev` | local dev server |
| `npm run build` | production build + static generation (also type-checks) |
| `npm run start` | serve the production build |
| `npm run lint` | ESLint (`next/core-web-vitals`) |
| `npm run typecheck` | `tsc --noEmit` |

## Structure

```
src/
  app/         routes (/, /magazine, /conference, /resources, /beliefs), sitemap, robots
  components/  layout/ · ui/ · sections/ · interactive/
  content/     typed page data ported from old/src
  lib/         site config, SEO helpers, utils
public/images/ optimized source photography
```

## Configuration

- `NEXT_PUBLIC_SITE_URL` — public site URL (defaults to `https://assemblytruth.org`).
  Drives canonical URLs, Open Graph, the sitemap, and `robots.txt`.

## Deployment

Default config produces a standard Next.js build (deploy to Vercel/Netlify/Node;
`next/image` optimization works automatically). For a pure static host, set
`output: 'export'` + `images.unoptimized` in `next.config.mjs` (see comments there).

## Before launch (human review)

- Confirm the custom domain and hosting platform.
- Confirm the WhatsApp number in `src/lib/site.ts` (the old site mixed a
  placeholder `919999999999` with the real `919705239970`).
- Add the next conference `startDate`/venue to the `Event` JSON-LD in
  `src/app/conference/page.tsx` if you want Event rich results.
