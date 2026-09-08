import styled from 'styled-components'

// Recurring small-caps mono section label. The one piece of consistent
// "engineer" personality on the site — used once at the top of each section.
//
// Round 6 dropped the `// comment` prefix it used to carry: a code-comment
// device on a label that isn't code is decoration, and this theme earns its
// character from typography and density instead.
export const SectionEyebrow = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${({ theme }) => theme.color.text[3]};
  margin-bottom: ${({ theme }) => theme.space[4]};
`
