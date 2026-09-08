// Skills, grouped to match the resume's own grouping so the two never drift.
// Every entry here is backed by shipped code — the AI/LLM group by OnCallOps,
// the cloud group by CareerMate's S3/Elastic Beanstalk work and the CI
// pipelines in the sibling repos. Nothing aspirational: things Gene is
// currently learning belong in `learning`, labelled as such, not mixed into
// the main list where a reader would take them as working knowledge.

export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'AI / LLM',
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
    label: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'SQLAlchemy'],
  },
  {
    label: 'Frontend',
    skills: ['TypeScript', 'React', 'Next.js', 'styled-components', 'Ant Design', 'Chakra UI'],
  },
  {
    label: 'Cloud & tooling',
    skills: ['AWS S3', 'Elastic Beanstalk', 'Vercel', 'Docker', 'GitHub Actions', 'pytest', 'Playwright', 'Git'],
  },
]

// Kept visually separate on the page. Claiming these as current skills is
// what gets someone caught in a technical interview.
export const learning = ['RAG pipelines', 'Vector search', 'Model evaluation']
