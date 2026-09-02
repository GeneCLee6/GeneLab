# CLAUDE.md

Guide for future Claude Code sessions working in this repo.

## Project in one line

**GeneLab** is Gene's personal portfolio + resume site (React + TypeScript +
Vite + styled-components). Single owner, static content, no backend.

**Read in this order before making changes:**

1. [`PRD.md`](./PRD.md) — what sections exist, content rules, "done" checklist.
2. [`RULES.md`](./RULES.md) — engineering conventions (KISS/DRY, and which
   parts of SOLID actually apply to a static site this size). Read before
   writing or restructuring any code.
3. [`DESIGN.md`](./DESIGN.md) — visual design system (colors, type, spacing,
   component patterns). Any UI change should match this or update it.
4. [`ARCHITECTURE.md`](./ARCHITECTURE.md) — tech stack, folder structure.

## Current status

As of this writing, the Home page is feature-complete for v1 and the Resume
page is still a stub:

- Done: `PRD.md` / `DESIGN.md` / `ARCHITECTURE.md` / `CLAUDE.md`, a design
  canvas exploring the visual direction (Home + Resume artboards), project
  scaffold (Vite + React + TypeScript + styled-components), `src/theme/`
  (tokens + GlobalStyle matching `DESIGN.md`), and a complete Home page —
  Header, Hero, Projects (all three project cards), and Contact section.
  The header carries GitHub + LinkedIn icon links and a Resume download
  button (`src/data/social.ts`), visible on every page since `Header` is
  shared layout.
- This revision pass (per Gene's direct feedback on the first design round)
  also: capitalized the logo wordmark (`GeneLab`, was lowercase `genelab`),
  removed the blinking cursor next to it, and added the GitHub/LinkedIn/
  Resume links described above in both the header and the Contact section
  footer.
- **Round 3** (per Gene's direct feedback: too plain/monotonous, hover
  states not good enough, wants it "impressive" with more color) changed
  the visual direction — see `DESIGN.md` §1/§2 for the full rationale.
  Short version: the palette expanded from one purple accent + sparing
  amber to a cohesive purple/blue/peach gradient system on a deepened
  purple-navy base; the hero got an oversized gradient-accented headline,
  a pill-chip row, and a decorative layered glow/terminal-card visual;
  Home's three sections (Hero/Projects/Contact) now each have their own
  full-bleed background band instead of sharing one flat backdrop; project
  cards each carry a rotating purple/blue/peach `hue` (top accent bar +
  category tag) instead of one-size-fits-all amber tags; and every
  interactive element (nav, buttons, icon links, cards, tags, contact
  links) got a considered hover treatment (lift + color/gradient shift +
  glow shadow) replacing the earlier opacity/border-only hovers. The design
  canvas Artifact was updated in place with the same changes.
- **Not yet implemented**: the full Resume page (`/resume` route with real
  Experience/Skills/Projects/Education content — it currently renders a
  placeholder stub), and any deployment setup. `npm run dev` runs and shows
  the complete Home page; the Resume page build-out is the next work
  session's scope.

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
- GitHub/LinkedIn/Resume links live in `src/data/social.ts` — edit there,
  not inline in `Header.tsx` or `Home.tsx`. This matters because the GitHub
  username (`GeneCLee6`) may change; centralizing it keeps that a one-line
  edit. A link with `url: null` renders as an unfilled placeholder per
  `DESIGN.md` §6, never as a broken/dead link.
