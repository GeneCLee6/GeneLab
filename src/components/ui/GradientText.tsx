import styled from 'styled-components'

// Gradient-filled inline text (purple → blue → peach) — used for one phrase
// within the hero headline (DESIGN.md §5 "Hero"). The single place the
// multi-hue gradient renders as text rather than a background/shadow.
export const GradientText = styled.span`
  background: ${({ theme }) => theme.color.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`
