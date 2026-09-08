import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { LogoMark } from '../ui/LogoMark'
import { social, location } from '../../data/social'

// Two parts: a closing call to action, then the footer proper.
//
// The CTA exists because the page previously ended on a copyright line — a
// visitor who read the whole thing and wanted to make contact had to scroll
// back up to find an address. A hiring-facing site should close by saying
// what it wants and making that one click away.

const Wrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.band};
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[7]};

  @media (max-width: 640px) {
    padding: 0 ${({ theme }) => theme.space[5]};
  }
`

const Cta = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[6]};
  padding: ${({ theme }) => theme.space[9]} 0 ${({ theme }) => theme.space[8]};

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space[5]};
    padding: ${({ theme }) => theme.space[8]} 0;
  }
`

const CtaHeading = styled.h2`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  letter-spacing: -0.028em;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.text[1]};
  margin: 0 0 ${({ theme }) => theme.space[3]};
  max-width: 20ch;
`

const CtaText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.text[2]};
  margin: 0;
  max-width: 48ch;
`

const CtaActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  flex-wrap: wrap;
  flex-shrink: 0;
`

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  gap: ${({ theme }) => theme.space[7]};
  padding: ${({ theme }) => theme.space[7]} 0;
  border-top: 1px solid ${({ theme }) => theme.color.border};

  @media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.space[6]};
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  font-weight: 600;
  font-size: 15.5px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.text[1]};
`

const Lab = styled.span`
  color: ${({ theme }) => theme.color.accent};
`

const BrandText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.text[2]};
  margin: 0;
  max-width: 34ch;
`

const ColTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.color.text[3]};
  margin: 0 0 ${({ theme }) => theme.space[4]};
`

const ColLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};

  a {
    font-size: 14.5px;
    color: ${({ theme }) => theme.color.text[2]};

    &:hover {
      color: ${({ theme }) => theme.color.text[1]};
    }
  }
`

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[5]} 0;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.text[3]};

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space[2]};
  }
`

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Footer() {
  return (
    <Wrap>
      <Container>
        <Cta>
          <div>
            <CtaHeading>Open to AI Engineer and Full-Stack roles.</CtaHeading>
            <CtaText>
              Based in {location}. Happy to talk about agent reliability, backend correctness, or
              anything on this page.
            </CtaText>
          </div>
          <CtaActions>
            <Button href={social.email.url}>
              <MailIcon />
              Get in touch
            </Button>
            <Button href={social.resume.url} $variant="secondary" download>
              Download resume
            </Button>
          </CtaActions>
        </Cta>

        <Columns>
          <Brand>
            <BrandRow>
              <LogoMark size={24} />
              <span>
                Gene<Lab>Lab</Lab>
              </span>
            </BrandRow>
            <BrandText>
              Portfolio and resume for Gene Lee — AI and full-stack engineering work.
            </BrandText>
          </Brand>

          <div>
            <ColTitle>Site</ColTitle>
            <ColLinks>
              <li>
                <a href="/#work">Work</a>
              </li>
              <li>
                <a href="/#stack">Stack</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
            </ColLinks>
          </div>

          <div>
            <ColTitle>Elsewhere</ColTitle>
            <ColLinks>
              <li>
                <a href={social.github.url} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={social.linkedin.url} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={social.email.url}>Email</a>
              </li>
              <li>
                <a href={social.resume.url} download>
                  Resume (PDF)
                </a>
              </li>
            </ColLinks>
          </div>
        </Columns>

        <BottomBar>
          <span>© {new Date().getFullYear()} Gene Lee</span>
          <span>Built with React, TypeScript and styled-components</span>
        </BottomBar>
      </Container>
    </Wrap>
  )
}
