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
   - **Hero**: nav, name/tagline, one-sentence positioning, two CTAs
     (View projects, View resume).
   - **Projects**: cards for CoverCompass, MelCoverCompare, WearCast — each
     with a category tag, one-line description, tech-stack tags, and a link
     out to the project's GitHub repo.
   - **Contact**: placeholder email, GitHub handle (real: `@GeneCLee6`),
     placeholder LinkedIn, Download Resume link. GitHub, LinkedIn, and
     Resume links also repeat in the header nav (icon links + a Resume
     button) so they're reachable from any scroll position, not just this
     section — see `DESIGN.md` §5.
2. **Resume** (`/resume`)
   - Name/title, Experience, Skills, Projects (recap linking back to Home),
     Education. Optional "Download PDF" affordance (button can exist before
     a real PDF does — wire it up when there's a résumé file to serve).

No other pages are in scope for v1 (no blog, no case-study sub-pages, no CMS
admin). If that changes, add a section here first rather than growing scope
silently in code.

## Content rules

- **Never invent biographical facts.** Work history, job titles, company
  names, education, dates, and contact details are all placeholders
  (`[Add role/company]`, `[Add contact email]`, etc.) until Gene supplies the
  real thing. See `DESIGN.md` §6 and `CLAUDE.md` for the enforced convention.
- **Project descriptions are grounded** — pulled from each sibling repo's own
  `README.md`, not embellished.
- **Skills section lists real tech** used across the three sibling projects
  (React, TypeScript, Vite, styled-components, Radix UI, Zustand, Vitest,
  Playwright, ESLint) since that's independently verifiable from the repos
  themselves, unlike work history.

## "Done" for v1

- [x] Visual design direction decided and documented (`DESIGN.md`).
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
