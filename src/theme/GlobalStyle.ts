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
      radial-gradient(circle at 15% -10%, rgba(124, 111, 255, 0.10), transparent 42%),
      linear-gradient(${({ theme }) => theme.color.borderSoft} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.color.borderSoft} 1px, transparent 1px);
    background-size: auto, 48px 48px, 48px 48px;
    min-height: 100vh;
  }

  a {
    color: ${({ theme }) => theme.color.accent2};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.color.accent};
    text-decoration: underline;
  }

  ::selection {
    background: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.ink[950]};
  }

  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
`
