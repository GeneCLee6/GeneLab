// Project content. Descriptions are grounded in what each repo actually
// contains — checked against the code, not written from memory. See
// CLAUDE.md "no invented facts" for why that matters on this site.
//
// No repo links. Gene's call: a GitHub URL is not what he wants a recruiter
// clicking — three of these repos are private anyway, and the plan is to give
// each finished project a deployed demo on its own domain. `demoUrl` is where
// that goes; until it is filled in, the card shows its `status` instead, so
// the absence reads as "not shipped yet" rather than as a missing link.

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
  /** Live demo. Null until the project is deployed to its own domain. */
  demoUrl: string | null
  /** Shown when there is no demo yet. Keep it honest and specific. */
  status?: string
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
    demoUrl: null,
    status: 'In development · demo coming',
    featured: true,
  },
  {
    slug: 'careermate',
    name: 'CareerMate',
    category: 'Resume platform',
    description:
      'A resume-management platform: accounts, authentication, and secure resume upload and retrieval, with AI-assisted review planned on top.',
    detail:
      'The backend is the part that is built. Files never pass through the API — the client gets a short-lived S3 presigned URL, uploads directly, and the server validates the object server-side (type and size via HeadObject) before it is promoted out of the temp prefix. Layered on JWT auth with role guards, Zod request validation, rate limiting, and Winston structured logging, deployed on AWS Elastic Beanstalk. The product UI and the AI review features are still being built.',
    tech: ['Node.js', 'Express', 'MongoDB', 'AWS S3', 'Elastic Beanstalk', 'JWT', 'Zod'],
    demoUrl: null,
    status: 'In development · demo coming',
    featured: true,
  },
  {
    slug: 'wearcast',
    name: 'WearCast',
    category: 'PWA · weather',
    description:
      'Weather-driven outfit recommendations — daily forecasts for saved cities paired with automatic what-to-wear suggestions, installable as a progressive web app.',
    detail:
      'An offline-capable PWA: forecasts and saved cities are cached so the app opens and stays useful without a connection, with client state kept in Zustand and a rule layer mapping forecast conditions onto clothing suggestions.',
    tech: ['React', 'TypeScript', 'Vite PWA', 'Zustand'],
    demoUrl: null,
    status: 'In development · demo coming',
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
    demoUrl: null,
  },
  {
    slug: 'melcovercompare',
    name: 'MelCoverCompare',
    category: 'Web app · insurance',
    description:
      'Melbourne car insurance comparison — compares quotes across insurers with plain-English pricing explanations and a single best-value recommendation.',
    detail: '',
    tech: ['React', 'TypeScript', 'Radix UI', 'Playwright'],
    demoUrl: null,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
