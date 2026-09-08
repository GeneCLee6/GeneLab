import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { IconButton, Button } from '../ui/Button'
import { LogoMark } from '../ui/LogoMark'
import { DownloadIcon } from '../ui/icons'
import { social } from '../../data/social'

// Breakpoint at which the inline nav links collapse into the menu button.
// Declared once so the two never drift apart and leave a width with no
// navigation at all — which is exactly what happened before the menu existed:
// under 780px the links were simply hidden and nothing replaced them.
const COMPACT = '780px'

const Shell = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
`

const Bar = styled.header`
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

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.06);
  }

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

  @media (max-width: ${COMPACT}) {
    display: none;
  }
`

const navItemStyles = css`
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 14px;
  font-weight: 450;
  color: ${({ theme }) => theme.color.text[2]};
  transition: color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
  }
`

const NavItem = styled(NavLink)`
  ${navItemStyles}

  &.active {
    color: ${({ theme }) => theme.color.accent};
  }
`

// Anchor links to on-page sections. NavLink would mark these "active" based
// on pathname only, so they'd all light up at once on "/" — plain anchors
// avoid that entirely.
const AnchorItem = styled.a`
  ${navItemStyles}
`

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`

// The GitHub/LinkedIn icons are the first thing to go when space is tight:
// they are duplicated in the footer and in the menu panel below.
const DesktopOnly = styled.div`
  display: contents;

  @media (max-width: 520px) {
    display: none;
  }
`

const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  color: ${({ theme }) => theme.color.text[2]};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: color 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
    border-color: ${({ theme }) => theme.color.borderStrong};
    background: ${({ theme }) => theme.color.surface};
  }

  @media (max-width: ${COMPACT}) {
    display: inline-flex;
  }
`

const Panel = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: ${COMPACT}) {
    display: block;
    overflow: hidden;
    background: ${({ theme }) => theme.color.bg};
    border-bottom: ${({ $open, theme }) =>
      $open ? `1px solid ${theme.color.border}` : '1px solid transparent'};

    /* Animating max-height keeps the panel in flow so it pushes the page
       rather than covering it — on a small screen an overlay that hides the
       content behind it is more disorienting than a shift. */
    max-height: ${({ $open }) => ($open ? '320px' : '0')};
    transition: max-height 0.24s ease, border-color 0.24s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
`

const PanelInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[7]}
    ${({ theme }) => theme.space[5]};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[5]}
      ${({ theme }) => theme.space[5]};
  }
`

const PanelLink = styled.a`
  padding: ${({ theme }) => theme.space[3]} 0;
  font-size: 15.5px;
  color: ${({ theme }) => theme.color.text[2]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
  }
`

const PanelRouteLink = styled(NavLink)`
  padding: ${({ theme }) => theme.space[3]} 0;
  font-size: 15.5px;
  color: ${({ theme }) => theme.color.text[2]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
  }

  &.active {
    color: ${({ theme }) => theme.color.accent};
  }
`

const PanelExternal = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[5]};
  padding-top: ${({ theme }) => theme.space[4]};

  a {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 13px;
    color: ${({ theme }) => theme.color.text[3]};
  }

  a:hover {
    color: ${({ theme }) => theme.color.text[1]};
  }
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const shellRef = useRef<HTMLDivElement>(null)
  const { pathname, hash } = useLocation()

  // Close on navigation. Anchor links inside the panel don't change the
  // pathname, so the click handlers close it too — this covers route changes
  // (Resume) and the browser back button.
  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (shellRef.current && !shellRef.current.contains(e.target as Node)) setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <Shell ref={shellRef}>
      <Bar>
        <Wordmark to="/" onClick={close}>
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
            <DesktopOnly>
              <IconButton href={social.github.url} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <GitHubIcon />
              </IconButton>
              <IconButton
                href={social.linkedin.url}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
              </IconButton>
            </DesktopOnly>
            {/* Carries the download glyph so it reads as "this hands you a
                file", not as another nav destination. */}
            <Button href={social.resume.url} $variant="secondary" $compact download>
              Resume
              <DownloadIcon />
            </Button>
            <MenuButton
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <MenuIcon open={open} />
            </MenuButton>
          </LinkGroup>
        </Nav>
      </Bar>

      <Panel id="mobile-nav" $open={open} aria-hidden={!open}>
        <PanelInner>
          <PanelLink href="/#work" onClick={close}>
            Work
          </PanelLink>
          <PanelLink href="/#stack" onClick={close}>
            Stack
          </PanelLink>
          <PanelLink href="/#about" onClick={close}>
            About
          </PanelLink>
          <PanelRouteLink to="/resume" onClick={close}>
            Resume
          </PanelRouteLink>
          <PanelExternal>
            <a href={social.github.url} target="_blank" rel="noreferrer" onClick={close}>
              GitHub
            </a>
            <a href={social.linkedin.url} target="_blank" rel="noreferrer" onClick={close}>
              LinkedIn
            </a>
            <a href={social.email.url} onClick={close}>
              Email
            </a>
          </PanelExternal>
        </PanelInner>
      </Panel>
    </Shell>
  )
}
