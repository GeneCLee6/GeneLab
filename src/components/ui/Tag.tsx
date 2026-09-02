import styled, { css } from 'styled-components'

// Mono tag used for both project-card category labels and tech-stack chips
// (DESIGN.md §5 "Cards"). `$variant="category"` is the one place amber is
// used — see DESIGN.md §2 note on accent.amber being sparing.
export const Tag = styled.span<{ $variant?: 'category' | 'tech'; $unset?: boolean }>`
  display: inline-block;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  padding: 4px 9px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.color.text[3]};

  ${({ $variant, theme }) =>
    $variant === 'category' &&
    css`
      color: ${theme.color.accentAmber};
      text-transform: uppercase;
      letter-spacing: 0.03em;
    `}

  ${({ $unset }) =>
    $unset &&
    css`
      border-style: dashed;
    `}
`
