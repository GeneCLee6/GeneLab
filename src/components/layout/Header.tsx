import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[8]};
  background: rgba(11, 13, 18, 0.86);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[5]};
  }
`

const Wordmark = styled(Link)`
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text[1]};

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.color.text[1]};
  }
`

const Lab = styled.span`
  color: ${({ theme }) => theme.color.accent2};
`

const Cursor = styled.span`
  display: inline-block;
  width: 9px;
  height: 19px;
  background: ${({ theme }) => theme.color.accent};
  margin-left: 5px;
  animation: blink 1.1s steps(1) infinite;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[7]};

  @media (max-width: 640px) {
    gap: ${({ theme }) => theme.space[4]};
  }
`

const NavItem = styled(NavLink)`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text[2]};

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
    text-decoration: none;
  }

  &.active {
    color: ${({ theme }) => theme.color.text[1]};
  }

  @media (max-width: 560px) {
    display: none;
  }
`

const GitHubPill = styled.a`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.text[1]};

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
    border-color: ${({ theme }) => theme.color.accent2};
    text-decoration: none;
  }
`

export function Header() {
  return (
    <Bar>
      <Wordmark to="/">
        <span>gene</span>
        <Lab>lab</Lab>
        <Cursor aria-hidden="true" />
      </Wordmark>
      <Nav>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/#projects">Projects</NavItem>
        <NavItem to="/resume">Resume</NavItem>
        <NavItem to="/#contact">Contact</NavItem>
        <GitHubPill href="https://github.com/GeneCLee6" target="_blank" rel="noreferrer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M8 4L4 12L8 20M16 4L20 12L16 20" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          @GeneCLee6
        </GitHubPill>
      </Nav>
    </Bar>
  )
}
