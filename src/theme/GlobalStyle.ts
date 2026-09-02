import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    color-scheme: dark;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.color.ink[950]};
    color: ${({ theme }) => theme.color.text[1]};
    font-family: ${({ theme }) => theme.font.body};
    background-image:
      radial-gradient(circle at 12% -10%, rgba(139, 110, 255, 0.16), transparent 42%),
      radial-gradient(circle at 95% 8%, rgba(79, 140, 255, 0.10), transparent 40%),
      linear-gradient(${({ theme }) => theme.color.borderSoft} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.color.borderSoft} 1px, transparent 1px);
    background-size: auto, auto, 48px 48px, 48px 48px;
    min-height: 100vh;
  }

  a {
    color: ${({ theme }) => theme.color.accent2};
    text-decoration: none;
    transition: color 0.25s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.color.accent};
    text-decoration: underline;
  }

  ::selection {
    background: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.ink[950]};
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`
