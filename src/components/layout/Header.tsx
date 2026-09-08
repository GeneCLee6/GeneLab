import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IconButton, Button } from '../ui/Button'
import { LogoMark } from '../ui/LogoMark'
import { social } from '../../data/social'

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[5]};
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[7]};
  /* Translucent form of theme.color.bg (#101318) — an alpha value is needed
     for the backdrop blur, which a solid token can't express. */
  background: rgba(16, 19, 24, 0.78);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[5]};
  }
`

const Wordmark = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: 600;
  font-size: 15.5px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.text[1]};
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
  }
`

const Lab = styled.span`
  color: ${({ theme }) => theme.color.accent};
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[6]};
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: 780px) {
    display: none;
  }
`

// Round 6: the underline is gone. Five simultaneously-underlined nav items
// was the specific thing that read as cluttered — this is a plain color
// change, with the accent reserved for the genuinely active route.
const NavItem = styled(NavLink)`
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 14px;
  font-weight: 450;
  color: ${({ theme }) => theme.color.text[2]};
  transition: color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
  }

  &.active {
    color: ${({ theme }) => theme.color.accent};
  }
`

// Anchor links to on-page sections. NavLink would mark these "active" based
// on pathname only, so they'd all light up at once on "/" — plain anchors
// avoid that entirely.
const AnchorItem = styled.a`
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 14px;
  font-weight: 450;
  color: ${({ theme }) => theme.color.text[2]};
  transition: color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
  }
`

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 2.5-.34c.85 0 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.64h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.66c0-1.35-.03-3.09-2-3.09-2 0-2.31 1.47-2.31 2.99V21h-4z" />
    </svg>
  )
}

export function Header() {
  return (
    <Bar>
      <Wordmark to="/">
        <LogoMark size={26} />
        <span>
          Gene<Lab>Lab</Lab>
        </span>
      </Wordmark>
      <Nav>
        <NavLinks>
          <AnchorItem href="/#work">Work</AnchorItem>
          <AnchorItem href="/#stack">Stack</AnchorItem>
          <AnchorItem href="/#about">About</AnchorItem>
          <NavItem to="/resume">Resume</NavItem>
        </NavLinks>
        <LinkGroup>
          <IconButton href={social.github.url} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <GitHubIcon />
          </IconButton>
          <IconButton href={social.linkedin.url} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
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
