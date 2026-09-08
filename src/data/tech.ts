// Which domain each technology belongs to. This is what makes tag colour
// carry meaning: a technology renders in the same colour everywhere it
// appears — the stack grid, a project card, a resume role — so the colour
// tells a reader what kind of thing it is rather than just adding variety.
//
// Add new technologies here when they appear in projects.ts, skills.ts or
// resume.ts. Anything unlisted falls back to `cloud` (the tooling bucket),
// which is a safe default but worth correcting.

export type TechCategory = 'ai' | 'backend' | 'frontend' | 'cloud'

const CATEGORY_BY_TECH: Record<string, TechCategory> = {}

function register(category: TechCategory, names: string[]) {
  for (const name of names) CATEGORY_BY_TECH[name.toLowerCase()] = category
}

register('ai', [
  'LangGraph',
  'OpenAI API',
  'Anthropic Claude API',
  'Agent runtimes',
  'LLM guardrail design',
  'Structured extraction',
  'RAG pipelines',
  'Vector search',
  'Model evaluation',
])

register('backend', [
  'Python',
  'FastAPI',
  'Node.js',
  'Express',
  'Nest.js',
  'REST APIs',
  'PostgreSQL',
  'MongoDB',
  'SQLAlchemy',
  'Alembic',
  'JWT',
  'Zod',
])

register('frontend', [
  'React',
  'React.js',
  'TypeScript',
  'Next.js',
  'styled-components',
  'Styled-components',
  'Ant Design',
  'Chakra UI',
  'Radix UI',
  'Zustand',
  'Vite',
  'Vite PWA',
  'React-Router',
  'Lodash',
  'Less',
])

register('cloud', [
  'AWS S3',
  'Elastic Beanstalk',
  'Vercel',
  'Docker',
  'GitHub Actions',
  'Git',
  'pytest',
  'Playwright',
  'Postman',
])

export function techCategory(name: string): TechCategory {
  return CATEGORY_BY_TECH[name.toLowerCase()] ?? 'cloud'
}

// Labels for the stack section, in the order they should be read: the AI work
// is what this site is arguing for, so it leads.
export const categoryLabels: Record<TechCategory, string> = {
  ai: 'AI / LLM',
  backend: 'Backend',
  frontend: 'Frontend',
  cloud: 'Cloud & tooling',
}
