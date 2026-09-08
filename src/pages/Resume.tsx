import styled from 'styled-components'
import { Header } from '../components/layout/Header'
import { Tag } from '../components/ui/Tag'
import { Button } from '../components/ui/Button'
import { DownloadIcon } from '../components/ui/icons'
import { BackToTop } from '../components/ui/BackToTop'
import { summary, experience, otherExperience, education, training } from '../data/resume'
import { skillGroups } from '../data/skills'
import { techCategory, categoryLabels } from '../data/tech'
import type { TechCategory } from '../data/tech'
import { social, location } from '../data/social'

const Main = styled.main`
  max-width: ${({ theme }) => theme.maxWidth.resume};
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[7]}
    ${({ theme }) => theme.space[9]};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.space[7]} ${({ theme }) => theme.space[5]};
  }
`

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[5]};
  margin-bottom: ${({ theme }) => theme.space[5]};

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const Name = styled.h1`
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text[1]};
  margin: 0 0 ${({ theme }) => theme.space[2]};
`

const Role = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.color.accent};
  margin: 0;
`

const ContactLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[6]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.text[3]};
`

const ContactItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
`

const ContactLabel = styled.span`
  width: 72px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.text[3]};
`

const Summary = styled.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.text[2]};
  margin: ${({ theme }) => theme.space[6]} 0 0;
  max-width: 68ch;
  text-align: justify;
  hyphens: auto;
`

const Section = styled.section`
  margin-top: ${({ theme }) => theme.space[8]};
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${({ theme }) => theme.color.text[3]};
  margin: 0 0 ${({ theme }) => theme.space[5]};
  padding-bottom: ${({ theme }) => theme.space[3]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`

// ---- Experience ---------------------------------------------------------

const Role_ = styled.article`
  margin-bottom: ${({ theme }) => theme.space[7]};

  &:last-child {
    margin-bottom: 0;
  }
`

const RoleHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[1]};

  @media (max-width: 640px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space[1]};
  }
`

const RoleTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text[1]};
  margin: 0;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.color.accent};
  }
`

const Period = styled.span`
  flex-shrink: 0;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.text[3]};
`

const RoleMeta = styled.p`
  font-size: 13.5px;
  color: ${({ theme }) => theme.color.text[3]};
  margin: 0 0 ${({ theme }) => theme.space[4]};
`

const Bullets = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.space[5]};
    font-size: 14.5px;
    line-height: 1.7;
    color: ${({ theme }) => theme.color.text[2]};
    max-width: 68ch;
    text-wrap: pretty;
  }

  /* A hairline dash rather than a bullet glyph — quieter, and it lines up
     with the mono metadata elsewhere on the page. */
  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 10px;
    height: 1px;
    background: ${({ theme }) => theme.color.borderStrong};
  }
`

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  margin-top: ${({ theme }) => theme.space[4]};
`

// ---- Compact rows (other experience, education, training) ---------------

const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[3]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space[1]};
  }
`

const RowMain = styled.div`
  font-size: 14.5px;
  color: ${({ theme }) => theme.color.text[1]};

  span {
    color: ${({ theme }) => theme.color.text[3]};
  }
`

// ---- Skills -------------------------------------------------------------

const SkillRow = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[4]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[3]};
  }
`

const SkillLabel = styled.div<{ $category: TechCategory }>`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme, $category }) => theme.color.category[$category].fg};
  padding-top: 2px;
`

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
`

export function Resume() {
  return (
    <>
      <Header />
      <Main>
        <TopRow>
          <div>
            <Name>Gene Lee</Name>
            <Role>AI Engineer · Full-Stack Developer</Role>
          </div>
          <Button href={social.resume.url} download $variant="secondary" $compact>
            Download PDF
            <DownloadIcon />
          </Button>
        </TopRow>

        <ContactLine>
          <ContactItem>
            <ContactLabel>location</ContactLabel>
            <span>{location}</span>
          </ContactItem>
          <ContactItem>
            <ContactLabel>email</ContactLabel>
            <a href={social.email.url}>{social.email.label}</a>
          </ContactItem>
          <ContactItem>
            <ContactLabel>linkedin</ContactLabel>
            <a href={social.linkedin.url} target="_blank" rel="noreferrer">
              {social.linkedin.label}
            </a>
          </ContactItem>
          <ContactItem>
            <ContactLabel>github</ContactLabel>
            <a href={social.github.url} target="_blank" rel="noreferrer">
              {social.github.label}
            </a>
          </ContactItem>
        </ContactLine>

        <Summary>{summary}</Summary>

        <Section>
          <SectionTitle>Experience</SectionTitle>
          {experience.map((role) => (
            <Role_ key={`${role.org}-${role.period}`}>
              <RoleHead>
                <RoleTitle>
                  {role.title} <em>· {role.org}</em>
                </RoleTitle>
                <Period>{role.period}</Period>
              </RoleHead>
              <RoleMeta>{role.meta}</RoleMeta>
              <Bullets>
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </Bullets>
              {role.stack && (
                <StackRow>
                  {role.stack.map((t) => (
                    <Tag key={t} $category={techCategory(t)}>
                      {t}
                    </Tag>
                  ))}
                </StackRow>
              )}
            </Role_>
          ))}
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          {skillGroups.map((group) => (
            <SkillRow key={group.category}>
              <SkillLabel $category={group.category}>{categoryLabels[group.category]}</SkillLabel>
              <SkillTags>
                {group.skills.map((s) => (
                  <Tag key={s} $category={group.category}>
                    {s}
                  </Tag>
                ))}
              </SkillTags>
            </SkillRow>
          ))}
        </Section>

        <Section>
          <SectionTitle>Other experience</SectionTitle>
          {otherExperience.map((item) => (
            <Row key={`${item.role}-${item.period}`}>
              <RowMain>
                {item.role} <span>· {item.org}</span>
              </RowMain>
              <Period>{item.period}</Period>
            </Row>
          ))}
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          {education.map((item) => (
            <Row key={item.title}>
              <RowMain>
                {item.title} <span>· {item.org}</span>
              </RowMain>
              <Period>{item.period}</Period>
            </Row>
          ))}
        </Section>

        <Section>
          <SectionTitle>Training</SectionTitle>
          {training.map((item) => (
            <Row key={item.title}>
              <RowMain>
                {item.title} <span>· {item.org}</span>
              </RowMain>
              <Period>{item.period}</Period>
            </Row>
          ))}
        </Section>
      </Main>
      <BackToTop />
    </>
  )
}
