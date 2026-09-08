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
    // Page base. Cool dark grey, not near-black — the first pass sat at
    // #0B0D10, which read as harsh and made the whole page feel heavy.
    // Lifting the base a few steps is what lets the text tones below sit
    // comfortably bright without glaring.
    bg: '#101318',
    // Elevated surfaces (cards, panels). One clear step up from `bg` so a
    // card reads as raised without needing a heavy shadow.
    surface: '#191D24',
    // Hover/active state for elevated surfaces.
    surfaceHover: '#1F242C',
    // Full-bleed band tint — separates a section from `bg` without a hard
    // border. Between `bg` and `surface`.
    band: '#14181E',

    // Hairline borders do the structural work in this theme (in place of the
    // shadows a light theme would use).
    border: '#2B313A',
    borderStrong: '#3D4552',

    text: {
      // Primary. Cool off-white; pure #FFF vibrates at large sizes.
      1: '#F2F4F7',
      // Secondary body copy. ~10:1 on `bg` — raised from the first pass,
      // where body text at ~8:1 still read as dim across long paragraphs.
      2: '#BAC1CB',
      // Muted metadata/labels. ~6.4:1 on `bg`, comfortably above AA.
      3: '#929AA6',
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

    // ---- Category colours -------------------------------------------------
    //
    // Four hues, one per technology domain. These are NOT decoration and they
    // are NOT a rotation: a given technology always renders in its domain's
    // colour, everywhere it appears — the stack grid, project cards, and the
    // resume. That makes the colour carry information (a reader can tell at a
    // glance whether a tag is AI, backend, frontend or infrastructure) rather
    // than just adding variety, which is the distinction between this and the
    // earlier round Gene rightly called "太花了".
    //
    // Deliberately none of them is blue: `accent` owns blue, and interactive
    // elements have to stay unambiguous. All four clear 8:1 on `bg`, so they
    // are safe at tag sizes.
    category: {
      ai: { fg: '#B9A0FF', bg: 'rgba(185, 160, 255, 0.10)', border: 'rgba(185, 160, 255, 0.28)' },
      backend: { fg: '#5FD3A6', bg: 'rgba(95, 211, 166, 0.10)', border: 'rgba(95, 211, 166, 0.28)' },
      frontend: { fg: '#E8B36B', bg: 'rgba(232, 179, 107, 0.10)', border: 'rgba(232, 179, 107, 0.28)' },
      cloud: { fg: '#EE8FA6', bg: 'rgba(238, 143, 166, 0.10)', border: 'rgba(238, 143, 166, 0.28)' },
    },
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
