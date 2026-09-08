// Skills, grouped by the same domains that drive tag colour (see tech.ts) so
// the stack section doubles as the legend for every tag elsewhere on the site.
//
// Every entry is backed by shipped code — the AI group by OnCallOps, the cloud
// group by CareerMate's S3/Elastic Beanstalk work and the CI pipelines in the
// sibling repos. Nothing aspirational: things Gene is currently learning live
// in `learning`, labelled as such, not mixed into the main list where a reader
// would take them as working knowledge.

import type { TechCategory } from './tech'

export interface SkillGroup {
  category: TechCategory
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'ai',
    skills: [
      'LangGraph',
      'Agent runtimes',
      'LLM guardrail design',
      'OpenAI API',
      'Anthropic Claude API',
      'Structured extraction',
    ],
  },
  {
    category: 'backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'SQLAlchemy'],
  },
  {
    category: 'frontend',
    skills: ['TypeScript', 'React', 'Next.js', 'styled-components', 'Ant Design', 'Chakra UI'],
  },
  {
    category: 'cloud',
    skills: ['AWS S3', 'Elastic Beanstalk', 'Vercel', 'Docker', 'GitHub Actions', 'pytest', 'Playwright', 'Git'],
  },
]

// Kept visually separate on the page. Claiming these as current skills is
// what gets someone caught in a technical interview.
export const learning = ['RAG pipelines', 'Vector search', 'Model evaluation']
