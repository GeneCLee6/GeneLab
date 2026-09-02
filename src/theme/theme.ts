// Design tokens — mirrors DESIGN.md. Keep this file as the single source of
// truth for colors/type/spacing; components should read from `theme`, never
// hardcode hex values or font stacks inline.

export const theme = {
  color: {
    ink: {
      950: '#0B0D12',
      900: '#12151C',
      800: '#171B24',
    },
    border: '#262B36',
    borderSoft: '#1B1F28',
    text: {
      1: '#EDEFF3',
      2: '#9AA3B2',
      3: '#5B6472',
    },
    accent: '#7C6FFF',
    accent2: '#9C90FF',
    accentAmber: '#FFB454',
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
