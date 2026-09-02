import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'

const Main = styled.main`
  max-width: ${({ theme }) => theme.maxWidth.home};
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

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 700;
  font-size: 60px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text[1]};
  max-width: 800px;
  margin: 0 0 ${({ theme }) => theme.space[6]};

  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const Sub = styled.p`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 19px;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.text[2]};
  max-width: 600px;
  margin: 0 0 ${({ theme }) => theme.space[8]};
`

const Ctas = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  align-items: center;
  flex-wrap: wrap;
`

const PrimaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  padding: 14px 24px;
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.ink[950]};
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 600;
  font-size: 15px;
  border-radius: ${({ theme }) => theme.radius.md};

  &:hover {
    text-decoration: none;
    filter: brightness(1.08);
  }
`

const SecondaryCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  padding: 14px 24px;
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.text[1]};
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 600;
  font-size: 15px;
  border-radius: ${({ theme }) => theme.radius.md};

  &:hover {
    text-decoration: none;
    border-color: ${({ theme }) => theme.color.accent2};
  }
`

// Projects and Contact sections are not implemented yet — see CLAUDE.md
// "Current status" and PRD.md "Done for v1" for what's next.
export function Home() {
  return (
    <>
      <Header />
      <Main>
        <Eyebrow>// software engineer</Eyebrow>
        <Headline>I build practical tools that make complicated decisions simple.</Headline>
        <Sub>
          A portfolio of independently-built web apps — from a tax-planning calculator to a
          weather-driven outfit recommender — plus my resume, for recruiters and collaborators.
        </Sub>
        <Ctas>
          <PrimaryCta href="#projects">
            View projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </PrimaryCta>
          <SecondaryCta to="/resume">View resume</SecondaryCta>
        </Ctas>
      </Main>
    </>
  )
}
