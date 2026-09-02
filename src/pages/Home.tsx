import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'
import { Tag } from '../components/ui/Tag'
import { Button } from '../components/ui/Button'
import { projects } from '../data/projects'
import { social } from '../data/social'

const Main = styled.main`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
`

const Section = styled.section`
  padding: ${({ theme }) => theme.space[9]} ${({ theme }) => theme.space[8]};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[5]};
  }
`

const HeroSection = styled(Section)`
  padding-top: ${({ theme }) => theme.space[10]};
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

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SectionHeading = styled.h2`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 700;
  font-size: 34px;
  color: ${({ theme }) => theme.color.text[1]};
  margin: 0 0 ${({ theme }) => theme.space[4]};
`

const SectionIntro = styled.p`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 15.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.text[2]};
  max-width: 620px;
  margin: 0 0 ${({ theme }) => theme.space[8]};
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[5]};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.color.ink[900]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 700;
  font-size: 21px;
  color: ${({ theme }) => theme.color.text[1]};
  margin: 0;
`

const CardDescription = styled.p`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 14.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.text[2]};
  margin: 0;
  flex-grow: 1;
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
`

const CardFooter = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  margin-top: ${({ theme }) => theme.space[1]};
  padding-top: ${({ theme }) => theme.space[4]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12.5px;
  color: ${({ theme }) => theme.color.accent2};

  &:hover {
    color: ${({ theme }) => theme.color.accent};
    text-decoration: none;
  }
`

const TerminalPanel = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13.5px;
  line-height: 2;
  background: ${({ theme }) => theme.color.ink[900]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[6]};
  max-width: 520px;
`

const Prompt = styled.div`
  color: ${({ theme }) => theme.color.text[3]};
`

const ContactRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.color.text[1]};
`

const ContactKey = styled.span`
  width: 76px;
  flex-shrink: 0;
`

const ContactValueSet = styled.a`
  color: ${({ theme }) => theme.color.accent2};
`

const ContactValueUnset = styled.span`
  color: ${({ theme }) => theme.color.text[3]};
`

export function Home() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection>
          <SectionEyebrow>// software engineer</SectionEyebrow>
          <Headline>I build practical tools that make complicated decisions simple.</Headline>
          <Sub>
            A portfolio of independently-built web apps — from a tax-planning calculator to a
            weather-driven outfit recommender — plus my resume, for recruiters and collaborators.
          </Sub>
          <Ctas>
            <Button href="#projects">
              View projects
              <ArrowIcon />
            </Button>
            <Button as={Link} to="/resume" $variant="secondary">
              View resume
            </Button>
          </Ctas>
        </HeroSection>

        <Section id="projects">
          <SectionEyebrow>// projects</SectionEyebrow>
          <SectionHeading>Selected work</SectionHeading>
          <SectionIntro>
            Three independent projects, each solving one concrete real-world decision end to end —
            spec, build, and ship.
          </SectionIntro>
          <CardGrid>
            {projects.map((project) => (
              <Card key={project.slug}>
                <Tag $variant="category">{project.category}</Tag>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <TagRow>
                  {project.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </TagRow>
                <CardFooter href={project.repoUrl} target="_blank" rel="noreferrer">
                  View repository
                  <ArrowIcon />
                </CardFooter>
              </Card>
            ))}
          </CardGrid>
        </Section>

        <Section id="contact">
          <SectionEyebrow>// contact</SectionEyebrow>
          <SectionHeading>Let&apos;s talk</SectionHeading>
          <SectionIntro>
            Open to hearing about roles, collaborations, or just talking shop about any of the
            projects above.
          </SectionIntro>
          <TerminalPanel>
            <Prompt>$ contact --info</Prompt>
            <ContactRow>
              <ContactKey>email</ContactKey>
              <ContactValueUnset>{social.email.label}</ContactValueUnset>
            </ContactRow>
            <ContactRow>
              <ContactKey>github</ContactKey>
              <ContactValueSet href={social.github.url!} target="_blank" rel="noreferrer">
                {social.github.label}
              </ContactValueSet>
            </ContactRow>
            <ContactRow>
              <ContactKey>linkedin</ContactKey>
              <ContactValueUnset>{social.linkedin.label}</ContactValueUnset>
            </ContactRow>
            <ContactRow>
              <ContactKey>resume</ContactKey>
              <ContactValueSet href={social.resume.url} download>
                {social.resume.label}
              </ContactValueSet>
            </ContactRow>
          </TerminalPanel>
        </Section>
      </Main>
    </>
  )
}
