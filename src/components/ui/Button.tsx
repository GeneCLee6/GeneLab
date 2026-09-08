import styled, { css } from 'styled-components'

// Primary/secondary button. Renders as an <a> by default; pass `as={Link}`
// for internal routes or `as="button"` for a real button element.
//
// Hover is a small, fast state change — border and background shift, no lift,
// no glow. On a dark technical theme an oversized hover animation is what
// makes a site read as a template; restraint is what reads as considered.
export const Button = styled.a<{ $variant?: 'primary' | 'secondary'; $compact?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radius.md};
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease;

  ${({ $compact }) =>
    $compact
      ? css`
          padding: 7px 13px;
          font-size: 13px;
        `
      : css`
          padding: 11px 20px;
          font-size: 14.5px;
        `}

  svg {
    transition: transform 0.18s ease;
  }

  ${({ theme, $variant }) =>
    $variant === 'secondary'
      ? css`
          background: transparent;
          border: 1px solid ${theme.color.border};
          color: ${theme.color.text[1]};

          &:hover {
            border-color: ${theme.color.borderStrong};
            background: ${theme.color.surface};
            color: ${theme.color.text[1]};
          }

          /* Trailing glyph moves the way the action does: download nudges
             down, the link arrow moves right. */
          &:hover svg {
            transform: translateY(2px);
          }
        `
      : css`
          background: ${theme.color.accent};
          border: 1px solid ${theme.color.accent};
          /* Dark text on the accent fill: the accent is bright enough that
             white-on-accent falls under 3:1. */
          color: ${theme.color.bg};

          &:hover {
            background: ${theme.color.accentHover};
            border-color: ${theme.color.accentHover};
            color: ${theme.color.bg};
          }

          &:hover svg {
            transform: translateX(3px);
          }
        `}
`

// Icon-only square, used for the header's GitHub/LinkedIn links.
export const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.color.text[2]};
  transition: border-color 0.18s ease, color 0.18s ease, background-color 0.18s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.borderStrong};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text[1]};
  }
`
