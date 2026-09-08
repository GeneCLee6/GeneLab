import styled, { css } from 'styled-components'
import type { TechCategory } from '../../data/tech'

// Mono metadata chip.
//
// The important variant is `$category`: a technology tag is tinted by the
// domain it belongs to (see data/tech.ts), and the same technology carries the
// same colour everywhere it appears. Before this, every tag was the same grey
// and a row of them read as an undifferentiated block — the section had no
// entry point for the eye. Colour here is a taxonomy, not decoration.
//
//   $category   tinted by domain — technology tags
//   accent      the interactive-blue variant — project category labels
//   muted       dashed, no fill — states like "In development", which are
//               information rather than something to click
//   (default)   quiet grey — anything without a domain
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

  ${({ $category, theme }) =>
    $category &&
    css`
      color: ${theme.color.category[$category].fg};
      background: ${theme.color.category[$category].bg};
      border-color: ${theme.color.category[$category].border};
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
    `}

  ${({ $variant, theme }) =>
    $variant === 'muted' &&
    css`
      color: ${theme.color.text[3]};
      background: transparent;
      border-style: dashed;
    `}
`
