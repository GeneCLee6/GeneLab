import styled, { css } from 'styled-components'

// Mono metadata chip — tech-stack items, category labels, status notes.
// Three variants, all built from the same shape so the page reads as one
// system rather than several competing chip styles:
//
//   default   quiet, bordered — tech stack items
//   accent    the one accent-colored variant — category labels
//   muted     dashed border, dimmed — "Private repo" and similar states,
//             which should read as informational, not clickable
export const Tag = styled.span<{ $variant?: 'accent' | 'muted' }>`
  display: inline-block;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12.5px;
  line-height: 1.5;
  padding: 3px 8px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.color.text[2]};
  white-space: nowrap;

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
      border-style: dashed;
    `}
`
