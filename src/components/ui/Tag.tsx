import styled, { css } from 'styled-components'

// Mono metadata chip — tech-stack items, category labels, status notes.
//
// The default variant carries a filled surface and a dimmer tone than body
// copy on purpose. It previously used `text.2`, the same colour as prose,
// which made a row of tech chips read as another line of sentence text and
// left the section looking flat and hard to scan. Metadata should be quieter
// than the prose it annotates, and the fill is what makes each chip read as a
// discrete object rather than as words in a row.
//
//   default   filled, dimmer than body — tech stack items
//   accent    the one accent-coloured variant — category labels
//   muted     dashed, no fill — states like "In development", which are
//             information, not something to click
export const Tag = styled.span<{ $variant?: 'accent' | 'muted' }>`
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
