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

Both pages are built with Gene's real content. **Round 6** replaced the visual
direction wholesale and filled in everything that was previously a placeholder
— see `DESIGN.md` for the full rationale.

- **Home** (`/`) — hero, featured work (OnCallOps, CareerMate), secondary
  product work, stack, about + contact. No placeholders remain.
- **Resume** (`/resume`) — the real resume: summary, experience with bullets,
  skills, other experience, education, training, and a working PDF download.
  Content lives in `src/data/resume.ts`.
- **Round 6 fixed three things that were broken, not merely ugly**: the page
  rendered blank until the visitor scrolled (`DESIGN.md` §7), every project
  "View repository" link 404'd (two of the repo names had never existed, and
  all three repos are private), and the header's Resume button pointed at a
  file that was not in `public/`.
- Why the earlier direction was abandoned: rounds 4–5 pursued a warm-cream,
  serif, "cozy" aesthetic that read as a craft blog rather than an engineer —
  the wrong signal for the AI/backend roles Gene is applying to. Those rounds
  were never committed; round 6 is the first commit since round 3.

Earlier rounds (1–3, purple-navy dark with gradient hero visuals; 4–5, warm
cream and coral) are superseded and no longer described here — see the git
history if the reasoning is ever needed.

- **Not yet done**: deployment. `vercel.json` exists but the site has never
  been deployed — Gene plans to put it on Vercel.

## Hard rule: no invented facts

Still the rule that matters most here, but its scope changed in round 6.

**Gene's real resume content has now been supplied.** It lives in
`src/data/resume.ts` and mirrors `../Resume/Gene_Resume_2026_Draft.md`, the
source that also generates `public/Gene_Lee_Resume.pdf`. Those must stay in
sync: if a title, date or bullet changes in one, change it in the other in the
same pass.

What has not changed:

- **Never invent a fact you weren't given** — no new employers, dates, titles,
  metrics, or technologies. If something is needed and unknown, ask Gene
  rather than writing something plausible.
- **Verify a technology before claiming it.** Project and skill copy is checked
  against the actual repos, not written from memory. This has already caught
  real errors: CareerMate was nearly described as an AI project (its backend
  has no LLM dependency at all — it is auth, S3 uploads and MongoDB), and the
  resume once claimed EC2 experience that turned out to be Elastic Beanstalk
  provisioning EC2 on Gene's behalf.
- **Keep shipped work separate from learning.** `learning` in
  `src/data/skills.ts` renders in its own labelled row. Don't promote an entry
  into the main stack groups without confirming Gene has actually built with it.
- **Never render a link that 404s.** `repoUrl: null` in `src/data/projects.ts`
  means the repo is private; it renders as a "Private repo" tag, not a link.
  Three of the five projects are in that state.

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
- New sections should reuse the patterns in `DESIGN.md` §5 (mono uppercase
  eyebrow above a section title, hairline section dividers, the `Tag`
  variants) rather than inventing new visual language per section.
- Watch the accent budget (`DESIGN.md` §2): roughly one accent element per
  viewport. Adding a new one usually means an existing one should give way.
- All content lives in `src/data/` — `projects.ts`, `skills.ts`, `resume.ts`,
  `social.ts`. Edit there, never inline in JSX.
- `src/data/resume.ts` and `../Resume/Gene_Resume_2026_Draft.md` are two
  copies of the same facts. Change both together.
