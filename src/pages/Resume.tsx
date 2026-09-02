import styled from 'styled-components'
import { Header } from '../components/layout/Header'

const Main = styled.main`
  max-width: ${({ theme }) => theme.maxWidth.resume};
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[10]} ${({ theme }) => theme.space[8]}
    ${({ theme }) => theme.space[9]};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.space[9]} ${({ theme }) => theme.space[5]};
  }
`

const Eyebrow = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.accent2};
  letter-spacing: 0.06em;
  margin-bottom: ${({ theme }) => theme.space[5]};
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 700;
  font-size: 42px;
  color: ${({ theme }) => theme.color.text[1]};
  margin: 0 0 ${({ theme }) => theme.space[4]};
`

const Note = styled.p`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 15.5px;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.text[2]};
  max-width: 520px;
`

// Full Experience / Skills / Projects / Education sections are the next work
// session's scope — see PRD.md "Done for v1" and the Resume artboard in the
// design canvas for the target layout. This stub exists so the /resume route
// and nav link actually go somewhere in the meantime.
export function Resume() {
  return (
    <>
      <Header />
      <Main>
        <Eyebrow>// resume</Eyebrow>
        <Title>Resume — coming soon</Title>
        <Note>
          Experience, skills, projects, and education sections are designed (see the GeneLab
          design canvas) but not built yet. Real content — name, roles, dates — is still TODO
          for Gene to provide.
        </Note>
      </Main>
    </>
  )
}
