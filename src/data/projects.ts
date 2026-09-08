// Project content. Descriptions are grounded in what each repo actually
// contains — checked against the code, not written from memory. See
// CLAUDE.md "no invented facts" for why that matters on this site
// specifically.
//
// `repoUrl: null` means the repo is private. It renders as a "Private repo"
// label, never as a link — a portfolio whose links 404 is worse than one
// that shows fewer links, and three of these projects genuinely are private.

export interface Project {
  slug: string
  name: string
  /** Short mono label — what kind of thing this is. */
  category: string
  /** One-sentence what-it-does. */
  description: string
  /** The engineering point — what was actually hard or worth showing. */
  detail: string
  tech: string[]
  repoUrl: string | null
  /** Set when the repo is private, to explain the missing link honestly. */
  note?: string
  /** Featured projects render in the larger two-column treatment. */
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'oncallops',
    name: 'OnCallOps',
    category: 'AI voice agent · team project',
    description:
      'A multi-tenant SaaS where an AI answers overflow phone calls for trade businesses — taking the job, checking capacity, and booking it without a human picking up.',
    detail:
      'I own the booking and capacity subsystem: atomic slot holds and idempotent confirmation under concurrent calls, an expiry sweep for stale holds, and the guard layer that constrains what the agent is allowed to promise a caller — service area, address validation, booking authority, safety priority. Built with a race-condition test suite, because the failure mode here is double-booking a real tradesperson.',
    tech: ['Python', 'LangGraph', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'pytest'],
    repoUrl: null,
    note: 'Private repo — public demo planned',
    featured: true,
  },
  {
    slug: 'careermate',
    name: 'CareerMate',
    category: 'REST API · resume platform',
    description:
      'A resume-management platform: accounts, authentication, and secure resume upload and retrieval. Backend complete; the product UI and the AI review features are still being built.',
    detail:
      'The interesting part is the upload path — files never pass through the API. The client gets a short-lived S3 presigned URL, uploads directly, and the server validates the object server-side (type and size via HeadObject) before it is promoted out of the temp prefix. Layered on JWT auth with role guards, Zod request validation, rate limiting, and Winston structured logging. Deployed on AWS Elastic Beanstalk.',
    tech: ['Node.js', 'Express', 'MongoDB', 'AWS S3', 'Elastic Beanstalk', 'JWT', 'Zod'],
    repoUrl: 'https://github.com/GeneCLee6/CareerMateBackend',
    note: 'In progress',
    featured: true,
  },
  {
    slug: 'covercompass',
    name: 'CoverCompass',
    category: 'Web app · tax planning',
    description:
      'Lifetime Health Cover and Medicare Levy Surcharge calculator for Australian taxpayers — quantifies the long-run cost of buying versus skipping private hospital cover.',
    detail: '',
    tech: ['React', 'TypeScript', 'Vite', 'styled-components'],
    repoUrl: null,
    note: 'Private repo',
  },
  {
    slug: 'melcovercompare',
    name: 'MelCoverCompare',
    category: 'Web app · insurance',
    description:
      'Melbourne car insurance comparison — compares quotes across insurers with plain-English pricing explanations and a single best-value recommendation.',
    detail: '',
    tech: ['React', 'TypeScript', 'Radix UI', 'Playwright'],
    repoUrl: null,
    note: 'Private repo',
  },
  {
    slug: 'wearcast',
    name: 'WearCast',
    category: 'PWA · weather',
    description:
      'Weather-driven outfit recommendations — daily forecasts for saved cities paired with automatic what-to-wear suggestions, installable as a PWA.',
    detail: '',
    tech: ['React', 'TypeScript', 'Vite PWA', 'Zustand'],
    repoUrl: null,
    note: 'Private repo',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
