import styled, { css } from 'styled-components'
import type { TechCategory } from '../../data/tech'

// Mono metadata chip.
//
// The important variant is `$category`: a technology tag is tinted by the
// domain it belongs to (see data/tech.ts), and the same technology carries the
// same colour everywhere it appears. Colour here is a taxonomy, not decoration.
//
//   $category   tinted by domain — technology tags
//   accent      the interactive-blue variant — project category labels
//   muted       dashed, no fill — states like "In development", which are
//               information rather than something to click
//   (default)   quiet grey — anything without a domain
//
// Tags respond to hover even though they are not interactive. That is
// deliberate: the response is a small brightening, which reads as the page
// being alive under the cursor without implying the chip is clickable — hence
// `cursor: default` and no movement.
export const Tag = styled.span<{ $variant?: 'accent' | 'muted'; $category?: TechCategory }>`
  display: inline-block;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12.5px;
  line-height: 1.5;
  padding: 3px 9px;
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.color.text[3]};
  white-space: nowrap;
  cursor: default;
  transition: color 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.color.text[2]};
    border-color: ${({ theme }) => theme.color.borderStrong};
  }

  ${({ $category, theme }) =>
    $category &&
    css`
      color: ${theme.color.category[$category].fg};
      background: ${theme.color.category[$category].bg};
      border-color: ${theme.color.category[$category].border};

      /* Hovering a domain tag deepens its own colour rather than shifting to
         a neutral, so the taxonomy still reads while it responds. */
      &:hover {
        color: ${theme.color.category[$category].fg};
        background: ${theme.color.category[$category].bgStrong};
        border-color: ${theme.color.category[$category].borderStrong};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'accent' &&
    css`
      color: ${theme.color.accent};
      border-color: ${theme.color.accentBorder};
      background: ${theme.color.accentSoft};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 11px;

      &:hover {
        color: ${theme.color.accentHover};
        border-color: ${theme.color.accent};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'muted' &&
    css`
      color: ${theme.color.text[3]};
      background: transparent;
      border-style: dashed;

      &:hover {
        color: ${theme.color.text[2]};
        border-color: ${theme.color.borderStrong};
      }
    `}
`
