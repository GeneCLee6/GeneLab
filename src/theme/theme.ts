// Design tokens — mirrors DESIGN.md. Keep this file as the single source of
// truth for colors/type/spacing; components should read from `theme`, never
// hardcode hex values or font stacks inline.

export const theme = {
  color: {
    ink: {
      950: '#150F2E',
      900: '#1E1740',
      800: '#281F52',
    },
    border: '#3A2F66',
    borderSoft: '#241C48',
    text: {
      1: '#F5F2FC',
      2: '#B6ADD1',
      3: '#766B9B',
    },
    accent: '#8B6EFF',
    accent2: '#B79CFF',
    blue: '#4F8CFF',
    peach: '#FF9D72',
    gradient: 'linear-gradient(135deg, #8B6EFF 0%, #4F8CFF 55%, #FF9D72 100%)',
  },
  font: {
    display: "'Space Grotesk', system-ui, sans-serif",
    body: "'IBM Plex Sans', system-ui, sans-serif",
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
    home: '1120px',
    resume: '880px',
  },
} as const

export type AppTheme = typeof theme
