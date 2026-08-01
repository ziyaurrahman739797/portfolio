# Ziya Ur Rahman — Portfolio

Premium, cinematic portfolio for **Ziya Ur Rahman**, an aspiring SAP S/4HANA ABAP Developer.

## Tech Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · GSAP · Lenis · Lucide React

## Features

- Cinematic black/glass visual language with Instrument Serif + Inter typography
- Letter-by-letter loading intro (skippable for returning visitors via `sessionStorage`)
- Custom `requestAnimationFrame`-based hero video fade (no CSS opacity transitions)
- Glass navbar with scroll-shrink, hide-on-scroll-down, and active-section highlighting
- Scroll-driven education timeline, skills grid, and learning-journey roadmap
- Animated stat counters, magnetic buttons, mouse-tilt glass cards, cursor spotlight
- Validated contact form with floating labels and success/loading states
- Fully data-driven content (`src/data/portfolio.ts`) — update once, reflects everywhere
- SEO: Open Graph, Twitter cards, canonical URL, Person JSON-LD schema, sitemap, robots.txt
- Respects `prefers-reduced-motion` throughout; disables cursor/tilt effects on touch devices

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

### Build

```bash
npm run build
npm run preview
```

## Required Assets

Add these to `public/` before shipping — the app references them but they aren't included:

| Path | Purpose |
|---|---|
| `public/videos/hero-background.mp4` | Hero background video (muted, loopable) |
| `public/images/portrait.jpg` | About section portrait |
| `public/images/ai-excel-chatbot-preview.jpg` | Featured project screenshot |
| `public/resume.pdf` | Downloadable resume |
| `public/og-image.jpg` | Social share preview image |

If `resume.pdf` is missing, wire the Resume button to show "Resume Coming Soon" and disable it gracefully (see `src/components/Navbar/Navbar.tsx` and `src/components/Contact/Contact.tsx`).

## Folder Structure

```
src/
  assets/           images, videos, icons
  components/       one folder per section (Hero, About, Education, Skills, ...)
  animations/        variants.ts, gsap.ts, transitions.ts
  hooks/            useVideoFade, useLenis, useScrollProgress, useMagnetic, useCursor
  utils/            constants.ts (all animation/design constants, no magic numbers)
  data/             portfolio.ts — single source of truth for all content
  types/            shared TypeScript interfaces
  pages/            Home.tsx
  App.tsx, main.tsx
```

## Deployment

Deploy-ready for **Vercel**, **Netlify**, or **GitHub Pages**. Build output goes to `dist/`.

```bash
npm run build
```

For Vercel: import the repo, framework preset "Vite", no extra config needed.

## Editing Content

All copy, links, and data live in `src/data/portfolio.ts`. Update that file to change any text,
add a project, or add a skill — no need to touch component code.

## Future Roadmap

The architecture is built to extend easily as Ziya adds:
- SAP projects (ALV Reports, SmartForms, CDS Views, OData, RAP)
- Certifications
- Internship / job experience

Add new entries to `src/data/portfolio.ts` and, if needed, a new section component following
the existing pattern (one responsibility per component, reveal-on-scroll via `<Reveal>`).

## License

Personal portfolio — all rights reserved by Ziya Ur Rahman.
