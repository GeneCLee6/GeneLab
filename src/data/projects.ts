// Project card content — edit here, not inline in Home.tsx (RULES.md §2 DRY,
// ARCHITECTURE.md). Descriptions are grounded in each sibling repo's own
// README.md — see CLAUDE.md "no invented personal facts" for why that
// matters here. `repoUrl` assumes each project lives under Gene's GitHub
// account at its project name; update if a repo is renamed or made private.

export interface Project {
  slug: string
  name: string
  category: string
  description: string
  tech: string[]
  repoUrl: string
}

export const projects: Project[] = [
  {
    slug: 'covercompass',
    name: 'CoverCompass',
    category: 'Web app · tax planning',
    description:
      'Independent MLS / Lifetime Health Cover planning calculator for Australian taxpayers — quantifies the lifetime financial impact of buying vs. not buying private hospital cover.',
    tech: ['React', 'TypeScript', 'Vite', 'styled-components'],
    repoUrl: 'https://github.com/GeneCLee6/CoverCompass',
  },
  {
    slug: 'melcovercompare',
    name: 'MelCoverCompare',
    category: 'Web app · insurance',
    description:
      'A Melbourne car insurance comparison tool: compare quotes across insurers, see plain-English pricing explanations, and get one best-value recommendation.',
    tech: ['React', 'TypeScript', 'Radix UI', 'styled-components'],
    repoUrl: 'https://github.com/GeneCLee6/MelCoverCompare',
  },
  {
    slug: 'wearcast',
    name: 'WearCast',
    category: 'PWA · weather',
    description:
      'A weather-based outfit recommendation PWA: daily forecasts for favourite cities, paired with automatic outfit suggestions.',
    tech: ['React', 'TypeScript', 'Vite PWA', 'Zustand'],
    repoUrl: 'https://github.com/GeneCLee6/WearCast',
  },
]
