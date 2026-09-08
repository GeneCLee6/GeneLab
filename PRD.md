# PRD.md — Product Requirements

## What this is

GeneLab is Gene's personal portfolio + resume website. Audience: recruiters,
potential collaborators, and anyone who lands on the GitHub profile and wants
more context. It has exactly one job: make Gene's software work and
background easy to scan in under a minute, and easy to go deeper on from
there (repos, resume download, contact).

This is **not** a blog, not a CMS, not a multi-user product. Single owner,
static content, no backend.

## Sections / pages

1. **Home** (`/`)
   - **Hero**: positioning kicker, headline, one-paragraph lede, two CTAs
     (View work, Read resume), and a mono strip of the core stack.
   - **Selected work**: the two projects that carry the AI/backend case —
     OnCallOps and CareerMate — in a wide two-column card with room for the
     actual engineering detail, not just a one-liner.
   - **Product work**: CoverCompass, MelCoverCompare, WearCast as a compact
     3-up grid. Secondary by design; they are front-end product work, not
     the thing Gene is being hired for.
   - **Stack**: four groups (AI/LLM first), with "currently learning" kept
     visually separate below a rule.
   - **About**: three-paragraph background — including the two years outside
     tech, stated plainly — beside a contact card.
2. **Resume** (`/resume`)
   - Name/title, contact line, summary, Experience (with bullets and a stack
     line per role), Skills, Other experience, Education, Training, and a
     working "Download PDF" button serving `public/Gene_Lee_Resume.pdf`.

No other pages are in scope for v1 (no blog, no case-study sub-pages, no CMS
admin). If that changes, add a section here first rather than growing scope
silently in code.

## Content rules

- **Never invent biographical facts.** Gene's real resume content has now been
  supplied and lives in `src/data/resume.ts` (mirroring
  `../Resume/Gene_Resume_2026_Draft.md`), but nothing beyond what he gave may
  be added — no new employers, dates, titles, or metrics. See `CLAUDE.md`.
- **Project descriptions are verified against the code**, not written from
  memory or embellished. A wrong technical claim here becomes a failed
  interview question.
- **No dead links.** Private repos render as a "Private repo" tag rather than
  a link that 404s.
- **Skills section lists real tech** used across the three sibling projects
  (React, TypeScript, Vite, styled-components, Radix UI, Zustand, Vitest,
  Playwright, ESLint) since that's independently verifiable from the repos
  themselves, unlike work history.

## "Done" for v1

- [x] Visual design direction decided and documented (`DESIGN.md`). Revised
      a third time per Gene's direct feedback (wanted a bolder, more
      colorful, more "impressive" look with better hover states) — see
      `DESIGN.md` §1/§2 and `CLAUDE.md` "Current status" for what changed.
- [x] Home page: Header/Hero implemented per the design.
- [x] Home page: Projects section with all three project cards.
- [x] Home page: Contact section (with GitHub, placeholder LinkedIn,
      placeholder email, and a working Download Resume link).
- [ ] Resume page: Experience / Skills / Projects / Education sections with
      placeholder content clearly marked.
- [ ] Real content: Gene fills in name, title, work history, education,
      contact email, LinkedIn.
- [ ] Deployed somewhere publicly reachable (e.g. GitHub Pages, Vercel,
      Netlify — not yet decided, see `ARCHITECTURE.md`).

v1 is "done" when every section above renders with either real or clearly
placeholder content, is responsive down to phone width, and is deployed to a
public URL. Nothing beyond that (analytics, contact form backend, CMS,
multi-language) is in scope unless added to this list first.

## Explicitly out of scope (for now)

- A working contact form (mailto/placeholder link is enough for v1).
- Blog / writing section.
- Automatic sync of project cards from GitHub's API (cards are hand-authored;
  revisit only if the project list starts changing often).
- Light mode (see `DESIGN.md` §2 note).
