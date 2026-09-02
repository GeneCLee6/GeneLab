# ARCHITECTURE.md — Tech Stack & Structure

## Stack

- **Vite + React + TypeScript** — same toolchain as the sibling projects
  (CoverCompass, MelCoverCompare, WearCast). No SSR/SSG framework: this is a
  small, mostly-static site, so a plain SPA build is enough and keeps the
  stack identical to the rest of Gene's projects.
- **styled-components** (+ `babel-plugin-styled-components` via
  `@vitejs/plugin-react`'s babel option) — same styling approach as
  CoverCompass/MelCoverCompare. Design tokens live in `src/theme/theme.ts`
  as a typed `DefaultTheme`, matching `DESIGN.md`.
- **react-router-dom** — two routes today (`/`, `/resume`); small enough that
  a heavier routing/data layer isn't justified.
- No backend, no database, no CMS. Content lives in source (project cards,
  resume sections) as plain TS data objects/components — see "Content" below.

Testing/linting are intentionally **not** wired up yet (see "Status" in
`CLAUDE.md`) — add Vitest + ESLint the same way the sibling projects did once
there's real logic worth testing (a portfolio site is mostly markup; add
tests when there's actual behavior, not to hit a checkbox).

## Folder structure

```
src/
  theme/
    theme.ts         design tokens (DESIGN.md → typed DefaultTheme)
    GlobalStyle.ts    global CSS reset + font-face/font-link wiring
  components/
    layout/           Header, Footer — shared across routes
    ui/               small reusable primitives (Button, Tag, SectionEyebrow)
  pages/
    Home.tsx          hero + projects + contact (single scrolling page)
    Resume.tsx         experience/skills/projects/education
  data/
    projects.ts       the three project cards (title, tag, description, tech, repo url)
  App.tsx             router setup
  main.tsx            entry point
public/
  favicon.svg
```

Why `pages/` even though there's no framework routing convention forcing it:
it mirrors what MelCoverCompare/WearCast do for top-level screens, and it's
the natural place to add a page later (case studies, etc.) without
restructuring.

`data/projects.ts` exists so the three project cards are edited in one place
(and easy to reorder/add to) rather than hardcoded inline in `Home.tsx`.

## Content vs. code

Resume content (name, roles, companies, dates, education) is **not** meant to
be hardcoded as literal strings scattered through `Resume.tsx`. Keep it as a
small typed data structure (mirroring `data/projects.ts`) so:
- placeholder vs. real content is one obvious edit, not a hunt through JSX
- `CLAUDE.md`'s "never invent biographical facts" rule stays enforceable —
  a reviewer (human or Claude) can check one file, not the whole page

## Deployment (not yet decided)

Not wired up today. Reasonable options once the site has real content:
GitHub Pages (simplest, free, works well for a static Vite SPA with
`vite.config.ts` `base` set correctly), Vercel, or Netlify. Pick one when
ready to go live — revisit this section then rather than guessing now.

## What's scaffolded vs. pending

See `CLAUDE.md` "Current status" for the up-to-date list — don't duplicate it
here; that section is the single source of truth for what exists in the repo
right now.
