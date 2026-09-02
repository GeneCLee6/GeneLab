import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IconButton, Button } from '../ui/Button'
import { social } from '../../data/social'

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[8]};
  background: rgba(21, 15, 46, 0.86);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  gap: ${({ theme }) => theme.space[4]};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[5]};
  }
`

// Wordmark: capitalized "Gene" + "Lab" — reads as a brand name rather than a
// raw lowercase package name (DESIGN.md §5 "Header / nav"). The blinking
// cursor that used to sit here was cut: a literal blink animation next to a
// wordmark read as a gimmick rather than a "technical" flourish. "Lab" now
// renders in the purple→blue→peach gradient (DESIGN.md §2) instead of a
// flat accent color, with a brightness lift on hover.
const Wordmark = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text[1]};
  flex-shrink: 0;
  transition: filter 0.25s ease;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.color.text[1]};
    filter: brightness(1.15);
  }
`

const Lab = styled.span`
  background: ${({ theme }) => theme.color.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[7]};

  @media (max-width: 780px) {
    gap: ${({ theme }) => theme.space[5]};
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[7]};

  @media (max-width: 640px) {
    display: none;
  }
`

// Underline is an animated gradient sweep (left→right on hover) rather than
// a static border or a color-only change — per Gene's feedback that hover
// states need a real considered treatment, not an opacity tweak.
const NavItem = styled(NavLink)`
  position: relative;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text[2]};
  padding-bottom: 4px;
  transition: color 0.25s ease, transform 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 100%;
    bottom: 0;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.color.gradient};
    transition: right 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
    text-decoration: none;
    transform: translateY(-1px);
  }

  &:hover::after,
  &.active::after {
    right: 0;
  }

  &.active {
    color: ${({ theme }) => theme.color.text[1]};
  }
`

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
`

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 4L4 12L8 20M16 4L20 12L16 20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8.5 10.5v6M8.5 8v.01M12.5 16.5v-3.5c0-1.1.7-2 2-2s2 .9 2 2v3.5" strokeLinecap="round" />
    </svg>
  )
}

export function Header() {
  return (
    <Bar>
      <Wordmark to="/">
        <span>Gene</span>
        <Lab>Lab</Lab>
      </Wordmark>
      <Nav>
        <NavLinks>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/#projects">Projects</NavItem>
          <NavItem to="/resume">Resume</NavItem>
          <NavItem to="/#contact">Contact</NavItem>
        </NavLinks>
        <LinkGroup>
          <IconButton
            href={social.github.url ?? undefined}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href={social.linkedin.url ?? undefined}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            $disabled={!social.linkedin.url}
            aria-disabled={!social.linkedin.url}
          >
            <LinkedInIcon />
          </IconButton>
          <Button href={social.resume.url} $variant="secondary" $compact download>
            Resume
          </Button>
        </LinkGroup>
      </Nav>
    </Bar>
  )
}
