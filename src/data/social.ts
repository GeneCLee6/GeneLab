// Centralized contact links — components read from here rather than
// hardcoding a URL inline, so the GitHub handle (which Gene has considered
// renaming) stays a one-line change.

interface SocialLink {
  label: string
  url: string
}

export const social = {
  github: {
    label: 'github.com/GeneCLee6',
    url: 'https://github.com/GeneCLee6',
  } satisfies SocialLink,
  linkedin: {
    label: 'linkedin.com/in/gene-chun-lee',
    url: 'https://www.linkedin.com/in/gene-chun-lee',
  } satisfies SocialLink,
  email: {
    label: 'genelee.pro@gmail.com',
    url: 'mailto:genelee.pro@gmail.com',
  } satisfies SocialLink,
  resume: {
    label: 'Resume',
    // Served from `public/`, kept in sync with Resume/Gene_Resume_2026.pdf.
    url: '/Gene_Lee_Resume.pdf',
  } satisfies SocialLink,
} as const

export const location = 'Melbourne, VIC · Australian PR'
