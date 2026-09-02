# CLAUDE.md

Guide for future Claude Code sessions working in this repo.

## Project in one line

**GeneLab** is Gene's personal portfolio + resume site (React + TypeScript +
Vite + styled-components). Single owner, static content, no backend.

**Read in this order before making changes:**

1. [`PRD.md`](./PRD.md) — what sections exist, content rules, "done" checklist.
2. [`DESIGN.md`](./DESIGN.md) — visual design system (colors, type, spacing,
   component patterns). Any UI change should match this or update it.
3. [`ARCHITECTURE.md`](./ARCHITECTURE.md) — tech stack, folder structure.

## Current status

As of this writing, the project is at **"design + scaffold complete, page
content pending"** — the same maturity level CoverCompass is at:

- Done: `PRD.md` / `DESIGN.md` / `ARCHITECTURE.md` / `CLAUDE.md`, a design
  canvas exploring the visual direction (Home + Resume artboards), project
  scaffold (Vite + React + TypeScript + styled-components), `src/theme/`
  (tokens + GlobalStyle matching `DESIGN.md`), and a working Header/Hero on
  the Home page.
- **Not yet implemented**: the Projects section (cards for CoverCompass /
  MelCoverCompare / WearCast), the Contact section, the full Resume page
  (`/resume` route with Experience/Skills/Projects/Education), and any
  deployment setup. `npm run dev` runs and shows the Header + Hero reflecting
  the chosen design; the rest is the next work session's scope.

## Hard rule: no invented personal facts

This is the one rule that matters more than anything else in this repo.

- **Never write real biographical facts you weren't given** — work history,
  job titles, employer names, education, dates, phone numbers, or email
  addresses. Gene's actual resume content has not been provided to any
  Claude session that built this repo.
- Anywhere that content is needed, use a clearly bracketed placeholder —
  `[Add role/company]`, `[Add contact email]`, `[Add LinkedIn URL]` — styled
  per `DESIGN.md` §6 so it visually reads as unfinished, not as real content.
- The one exception is the **Skills** section: those tags are grounded in
  technology genuinely used across the sibling repos (CoverCompass,
  MelCoverCompare, WearCast) — React, TypeScript, Vite, styled-components,
  Radix UI, Zustand, Vitest, Playwright, ESLint — which is verifiable from
  those repos, unlike work history.
- Project descriptions (CoverCompass / MelCoverCompare / WearCast) should
  stay in sync with each project's own `README.md` one-liner — check there
  before editing copy, don't embellish.
- If a task asks you to "fill in the resume" or similar without supplying
  real content, push back and ask for the actual details rather than
  inventing something plausible-sounding.

## Common commands

```bash
npm install
npm run dev       # Vite dev server, http://localhost:5173
npm run build      # tsc -b + vite build
npm run preview    # preview production build
```

(No lint/test scripts yet — see `ARCHITECTURE.md` "Stack" for why, and add
them the same way the sibling projects did once there's real logic worth
testing.)

## Conventions worth following

- Design tokens only live in `src/theme/theme.ts` — don't hardcode hex
  colors or font stacks in components; pull from `theme`.
- New sections should reuse the established patterns from `DESIGN.md`
  (mono "eyebrow" section labels styled as code comments, the card pattern
  with no left-border accent stripe, etc.) rather than inventing new visual
  language per-section.
- Project card content lives in `src/data/projects.ts` (see
  `ARCHITECTURE.md`) — edit there, not inline in JSX.
