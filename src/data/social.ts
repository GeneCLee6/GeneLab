// Centralized social/contact links — components read from here, never
// hardcode a profile URL inline (see RULES.md §2 DRY). The GitHub username
// is real (`GeneCLee6`) but Gene is considering renaming it, so keeping it
// in one place makes that a one-line change later.
//
// `url: null` marks a link that isn't real yet — per CLAUDE.md's
// "no invented personal facts" rule, components must render these as
// visibly unfilled placeholders (DESIGN.md §6), not as clickable links.

interface SocialLink {
  label: string
  url: string | null
}

export const social = {
  github: {
    label: '@GeneCLee6',
    url: 'https://github.com/GeneCLee6',
  } satisfies SocialLink,
  linkedin: {
    label: '[Add LinkedIn URL]',
    url: null,
  } satisfies SocialLink,
  email: {
    label: '[Add contact email]',
    url: null,
  } satisfies SocialLink,
  resume: {
    label: 'Download Resume',
    // Wired up now per Gene's request; the actual PDF is dropped into
    // public/resume.pdf later — this link is a 404 until then.
    url: '/resume.pdf',
  } satisfies SocialLink,
} as const
