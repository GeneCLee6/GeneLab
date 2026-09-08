// Design tokens — the single source of truth for color/type/spacing.
// Components read from `theme`; never hardcode a hex or font stack inline.
//
// Round 6 — "dark technical". The previous warm-cream/coral/Fraunces theme
// read as a craft-blog aesthetic, which is the wrong signal for the roles
// Gene is targeting (AI/backend engineering). This round moves to the visual
// language those teams actually use: a near-black neutral base, one cool
// accent carrying every interactive role, a precise grotesque for text, and
// mono reserved for metadata. Restraint is the point — the credibility comes
// from dense, real content, not from decoration.
//
// Note this is NOT a return to the round-3 dark theme Gene rejected: that one
// was purple-navy with blurred color glows. This base is a true neutral with
// no hue cast and no glow layers.
export const theme = {
  color: {
    // Page base. Very slightly cool near-black — pure #000 makes borders and
    // elevation impossible to read, and looks harsh on large surfaces.
    bg: '#0B0D10',
    // Elevated surfaces (cards, panels). One clear step up from `bg` so a
    // card reads as raised without needing a heavy shadow.
    surface: '#12151A',
    // Hover/active state for elevated surfaces.
    surfaceHover: '#171B22',
    // Full-bleed band tint — used to separate a section from `bg` without a
    // hard border. Between `bg` and `surface`.
    band: '#0E1114',

    // Hairline borders do the structural work in this theme (in place of the
    // shadows a light theme would use).
    border: '#232830',
    borderStrong: '#333B47',

    text: {
      // Primary. Slightly cool off-white; #FFF at large sizes vibrates
      // against a near-black base.
      1: '#E6E9EF',
      // Secondary body copy. ~8:1 on `bg`.
      2: '#9AA3B0',
      // Muted metadata/labels. ~5:1 on `bg` — still AA for normal text.
      3: '#757E8C',
    },

    // The SINGLE accent. Carries every interactive role: links, buttons,
    // focus rings, active nav, the one emphasized headline phrase. Kept to
    // one hue deliberately — Gene's standing feedback on an earlier round
    // was that a multi-hue rotation read as "太花了" (too busy).
    // ~6.5:1 on `bg`, so it is safe as small text, not just as a fill.
    accent: '#6C8EFF',
    // Brighter variant for hover states on accent-colored text/fills.
    accentHover: '#8FA9FF',
    // Translucent accent for soft fills (chips, hover washes) — an alpha
    // value rather than a second opaque token, so it composites correctly
    // over both `bg` and `surface`.
    accentSoft: 'rgba(108, 142, 255, 0.12)',
    accentBorder: 'rgba(108, 142, 255, 0.32)',
  },

  font: {
    // One family for display and body. Inter's tighter optical sizing at
    // large weights is what gives headings their "engineered" feel — the
    // work is done by weight/tracking, not by a second display face.
    sans: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    // Reserved for metadata: section labels, dates, tech tags, key/value
    // rows. Never for body copy.
    mono: "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', monospace",
  },

  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '64px',
    9: '96px',
    10: '128px',
  },

  radius: {
    sm: '4px',
    md: '6px',
    lg: '10px',
  },

  maxWidth: {
    home: '1080px',
    resume: '820px',
    wide: '1240px',
  },
} as const

export type AppTheme = typeof theme
