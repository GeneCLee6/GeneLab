// Real resume content, supplied by Gene and mirrored from
// `../../../Resume/Gene_Resume_2026_Draft.md` (the source of truth for the
// PDF in `public/Gene_Lee_Resume.pdf`). Keep the two in sync: if a date,
// title or bullet changes there, change it here in the same pass.
//
// Everything below is verified — cross-referenced from Gene's three earlier
// resumes, his own corrections, and (for the OnCallOps bullets) his actual
// commit history. Nothing here is inferred or embellished.

export interface ResumeRole {
  title: string
  org: string
  meta: string
  period: string
  bullets: string[]
  /** Technologies for this role, rendered as domain-coloured tags. */
  stack?: string[]
}

export const summary =
  'Full-stack developer with production experience across React, Node.js and TypeScript, now building AI ' +
  'engineering skills through active contribution to OnCallOps — a multi-tenant, LangGraph-based AI voice-agent ' +
  'platform. Comfortable owning backend correctness under real constraints (concurrency, idempotency, ' +
  'multi-tenant data isolation) as well as end-to-end feature delivery in agile teams.'

export const experience: ResumeRole[] = [
  {
    title: 'AI & Full-Stack Engineer',
    org: 'OnCallOps',
    meta: 'Freelance team project · 9-person team · Melbourne (remote)',
    period: '05/2026 — Present',
    bullets: [
      'Backend contributor on a multi-tenant AI voice-agent SaaS that lets an AI answer overflow phone calls for trade businesses, built on a LangGraph conversation runtime with deterministic guardrails wrapping every LLM decision.',
      'Built the booking & capacity subsystem in Python: atomic slot holds and idempotent booking confirmation under concurrent requests, an idempotent expiry sweep for stale holds, and a concurrency/race-condition test suite.',
      'Implemented the safety/priority, service-area, address-validation, booking-authority and whitelist guards that constrain what the AI agent is allowed to promise a caller.',
      'Built DST-safe availability computation (Sydney timezone) and enforced valid job-status transition rules.',
      'Designed the tenant-scoped Job/Booking data schema.',
      'Worked via PR review and CI in a cross-functional team of 9.',
    ],
    stack: ['Python', 'LangGraph', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'pytest'],
  },
  {
    title: 'Frontend Developer',
    org: 'University of Tasmania',
    meta: 'Hobart, TAS',
    period: '07/2022 — 04/2023',
    bullets: [
      'Delivered features against weekly client deliverables in a structured agile project; daily cross-team syncs with front-end and back-end developers.',
    ],
    stack: ['React.js', 'Ant Design', 'Lodash', 'Less', 'React-Router', 'MongoDB', 'Docker', 'Postman'],
  },
  {
    title: 'Web Developer',
    org: 'My IT Studio',
    meta: 'Hobart, TAS · internship, then subcontractor (ABN)',
    period: '05/2022 — 04/2023',
    bullets: [
      'Built and maintained a customer ordering system, integrated PayPal for online payments, and optimised SEO on a Shopify storefront.',
    ],
    stack: ['Next.js', 'Nest.js', 'Styled-components', 'Chakra UI', 'MongoDB', 'Vercel'],
  },
]

// Deliberately compressed to one line each, no bullets — these years are
// real and shouldn't be hidden (an unexplained gap reads worse than an
// honest one), but they shouldn't compete with the engineering work either.
export const otherExperience = [
  { role: 'Bus Driver', org: 'Metro, Launceston TAS / Ventura, Melbourne VIC', period: '06/2024 — 06/2026' },
  { role: 'Warehouse Manager / Delivery Driver', org: 'Nierinna Produce, Hobart TAS', period: '05/2023 — 02/2024' },
]

export const education = [
  {
    title: 'Master of Information Technology and Systems',
    org: 'University of Tasmania',
    period: '07/2019 — 07/2021',
  },
  { title: 'Bachelor of Mathematics', org: 'Tamkang University, Taiwan', period: '09/2011 — 01/2016' },
]

export const training = [
  {
    title: 'Full Stack & AI Development Program',
    org: 'JR Academy (remote)',
    period: '09/2021 — 01/2022, 05/2026 — Present',
  },
  { title: 'ACS Professional Year Program — ICT', org: 'QIBA, Hobart', period: '08/2021 — 08/2022' },
]
