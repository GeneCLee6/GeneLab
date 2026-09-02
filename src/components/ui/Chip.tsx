import styled, { css } from 'styled-components'

export type ChipHue = 'purple' | 'blue' | 'peach'

// Filled, fully-rounded pill — a distinct pattern from `Tag` (bordered,
// square-radius), used for the hero's keyword row (DESIGN.md §5 "Hero").
// Purely decorative/display, not a link, but still gets a hover lift + glow
// so it reads as part of the site's considered-hover system rather than
// dead weight.
const hueStyles: Record<ChipHue, ReturnType<typeof css>> = {
  purple: css`
    background: rgba(139, 110, 255, 0.14);
    border-color: rgba(139, 110, 255, 0.4);
    color: #d3c4ff;

    &:hover {
      background: rgba(139, 110, 255, 0.28);
      box-shadow: 0 8px 20px rgba(139, 110, 255, 0.3);
    }
  `,
  blue: css`
    background: rgba(79, 140, 255, 0.14);
    border-color: rgba(79, 140, 255, 0.4);
    color: #bfd8ff;

    &:hover {
      background: rgba(79, 140, 255, 0.28);
      box-shadow: 0 8px 20px rgba(79, 140, 255, 0.3);
    }
  `,
  peach: css`
    background: rgba(255, 157, 114, 0.14);
    border-color: rgba(255, 157, 114, 0.4);
    color: #ffd4bc;

    &:hover {
      background: rgba(255, 157, 114, 0.28);
      box-shadow: 0 8px 20px rgba(255, 157, 114, 0.3);
    }
  `,
}

export const Chip = styled.span<{ $hue: ChipHue }>`
  display: inline-block;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12.5px;
  letter-spacing: 0.02em;
  padding: 9px 18px;
  border-radius: 999px;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: default;

  &:hover {
    transform: translateY(-2px) scale(1.03);
  }

  ${({ $hue }) => hueStyles[$hue]}
`
