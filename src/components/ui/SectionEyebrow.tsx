import styled from 'styled-components'

// The recurring mono "code comment" section label (`// projects`) — see
// DESIGN.md §5 "Section labels". Shared so every section reuses the same
// style instead of each page re-declaring its own near-identical version
// (RULES.md §2 DRY flags this exact duplication).
export const SectionEyebrow = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.accent2};
  letter-spacing: 0.06em;
  margin-bottom: ${({ theme }) => theme.space[5]};
`
