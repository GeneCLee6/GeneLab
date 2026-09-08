import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'
import { Tag } from '../components/ui/Tag'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { BackToTop } from '../components/ui/BackToTop'
import { ArrowIcon } from '../components/ui/icons'
import { featuredProjects, otherProjects } from '../data/projects'
import { skillGroups, learning } from '../data/skills'
import { techCategory, categoryLabels } from '../data/tech'
import type { TechCategory } from '../data/tech'
import { social, location } from '../data/social'

const Main = styled.main`
  width: 100%;
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[7]};

  @media (max-width: 640px) {
    padding: 0 ${({ theme }) => theme.space[5]};
  }
`

const Section = styled.section`
  padding: ${({ theme }) => theme.space[9]} 0;
  border-top: 1px solid ${({ theme }) => theme.color.border};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.space[8]} 0;
  }
`

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text[1]};
  margin: 0 0 ${({ theme }) => theme.space[6]};
`

// ---- Hero ---------------------------------------------------------------

// No decorative visual. The previous hero carried a fake stat card and a
// mock terminal printing `npm run build` — filler that an engineer reading
// this page recognizes instantly as having nothing real to show. The hero's
// job here is to state the positioning and get out of the way.
const Hero = styled.section`
  padding: ${({ theme }) => theme.space[10]} 0 ${({ theme }) => theme.space[9]};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.space[8]} 0;
  }
`

const Kicker = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text[3]};
  margin-bottom: ${({ theme }) => theme.space[5]};
`

const Dot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.accent};
`

// clamp caps at 52px. The previous headline ran to 76px and wrapped over six
// lines, which pushed every piece of substance below the fold.
const Headline = styled.h1`
  font-size: clamp(32px, 4.6vw, 52px);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.032em;
  color: ${({ theme }) => theme.color.text[1]};
  max-width: 17ch;
  margin: 0 0 ${({ theme }) => theme.space[5]};
`

const Accent = styled.span`
  color: ${({ theme }) => theme.color.accent};
`

const Lede = styled.p`
  font-size: 17px;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.text[2]};
  max-width: 62ch;
  margin: 0 0 ${({ theme }) => theme.space[7]};
  text-wrap: pretty;
`

const Ctas = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.space[8]};
`

const StackStrip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  padding-top: ${({ theme }) => theme.space[5]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
`

// ---- Featured project cards ---------------------------------------------

const FeaturedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
`

const FeatureCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 1.45fr;
  gap: ${({ theme }) => theme.space[6]};
  padding: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.borderStrong};
    background: ${({ theme }) => theme.color.surfaceHover};
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[4]};
  }
`

const CardHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  align-items: flex-start;
`

const CardName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text[1]};
  margin: 0;
  transition: color 0.2s ease;

  /* Ties the title to its card: hovering anywhere on the card highlights it,
     so the card reads as one object rather than a bordered box of parts. */
  ${FeatureCard}:hover & {
    color: ${({ theme }) => theme.color.accent};
  }
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`

const CardLead = styled.p`
  font-size: 15.5px;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.text[2]};
  margin: 0;
  max-width: 62ch;
  text-wrap: pretty;
`

// The engineering detail — deliberately the longest text on the card. This
// is the part a technical reader is actually evaluating.
const CardDetail = styled.p`
  font-size: 14.5px;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.text[3]};
  margin: 0;
  max-width: 62ch;
  text-wrap: pretty;
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
`

const DemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12.5px;

  svg {
    transition: transform 0.18s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`

// ---- Secondary project list ---------------------------------------------

const MiniGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.space[4]};
  align-items: stretch;

  /* The direct children are Reveal wrappers, not the cards themselves. */
  > * {
    height: 100%;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`

const MiniCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.borderStrong};
    background: ${({ theme }) => theme.color.surface};
  }
`

const MiniName = styled.h3`
  font-size: 15.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text[1]};
  margin: 0;
  transition: color 0.2s ease;

  ${MiniCard}:hover & {
    color: ${({ theme }) => theme.color.accent};
  }
`

const MiniText = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.text[2]};
  margin: 0;
  flex-grow: 1;
  text-wrap: pretty;
`

const MiniMeta = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
`

// ---- Stack --------------------------------------------------------------

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.space[5]};
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

const StackGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`

const StackLabel = styled.h3<{ $category: TechCategory }>`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme, $category }) => theme.color.category[$category].fg};
  margin: 0;
  padding-bottom: ${({ theme }) => theme.space[3]};
  /* The rule under each label picks up the domain colour too, so the four
     columns read as four distinct groups before a word is read. */
  border-bottom: 1px solid ${({ theme, $category }) => theme.color.category[$category].border};
`

const StackItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
`

// Learning is kept visually distinct from the shipped stack above. Merging
// the two is how people end up claiming working knowledge of something they
// have only read about.
const LearningRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[7]};
  padding-top: ${({ theme }) => theme.space[5]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
`

const LearningLabel = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.color.text[3]};
`

// ---- About / contact ----------------------------------------------------

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: ${({ theme }) => theme.space[8]};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
  }
`

const Prose = styled.div`
  p {
    font-size: 15px;
    line-height: 1.7;
    color: ${({ theme }) => theme.color.text[2]};
    margin: 0 0 ${({ theme }) => theme.space[4]};
    max-width: 62ch;
    text-wrap: pretty;
  }

  p:last-child {
    margin-bottom: 0;
  }

  strong {
    color: ${({ theme }) => theme.color.text[1]};
    font-weight: 500;
  }
`

const ContactCard = styled.div`
  padding: ${({ theme }) => theme.space[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  height: fit-content;
`

const ContactRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13.5px;
  padding: ${({ theme }) => theme.space[3]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
`

const ContactKey = styled.span`
  width: 64px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.text[3]};
`

const ContactValue = styled.span`
  color: ${({ theme }) => theme.color.text[2]};
  overflow-wrap: anywhere;

  a {
    display: inline-block;
    transition: transform 0.18s ease;
  }

  a:hover {
    transform: translateX(2px);
  }
`

export function Home() {
  return (
    <>
      <Header />
      <Main>
        <Hero>
          <Container>
            <Reveal>
              <Kicker>
                <Dot />
                AI Engineer · Melbourne
              </Kicker>
            </Reveal>
            <Reveal delay={60}>
              <Headline>
                I build AI systems that stay <Accent>correct under load</Accent>.
              </Headline>
            </Reveal>
            <Reveal delay={120}>
              <Lede>
                Backend and LLM agent work — concurrency, idempotency, and the guardrails that decide
                what a model is actually allowed to do. Previously three years of full-stack product
                work in React and Node.
              </Lede>
            </Reveal>
            <Reveal delay={180}>
              <Ctas>
                <Button href="#work">
                  View work
                  <ArrowIcon />
                </Button>
                <Button as={Link} to="/resume" $variant="secondary">
                  Read resume
                </Button>
              </Ctas>
            </Reveal>
            <Reveal delay={240}>
              <StackStrip>
                {['LangGraph', 'Python', 'FastAPI', 'PostgreSQL', 'TypeScript', 'React', 'AWS S3', 'Docker'].map(
                  (t) => (
                    <Tag key={t} $category={techCategory(t)}>
                      {t}
                    </Tag>
                  ),
                )}
              </StackStrip>
            </Reveal>
          </Container>
        </Hero>

        <Section id="work">
          <Container>
            <Reveal>
              <SectionEyebrow>Selected work</SectionEyebrow>
            </Reveal>
            <Reveal delay={60}>
              <SectionTitle>What I&apos;ve been building</SectionTitle>
            </Reveal>
            <FeaturedList>
              {featuredProjects.map((project, i) => (
                <Reveal key={project.slug} delay={120 + i * 80}>
                  <FeatureCard>
                    <CardHead>
                      <Tag $variant="accent">{project.category}</Tag>
                      <CardName>{project.name}</CardName>
                      {project.demoUrl ? (
                        <DemoLink href={project.demoUrl} target="_blank" rel="noreferrer">
                          View demo
                          <ArrowIcon />
                        </DemoLink>
                      ) : (
                        project.status && <Tag $variant="muted">{project.status}</Tag>
                      )}
                    </CardHead>
                    <CardBody>
                      <CardLead>{project.description}</CardLead>
                      <CardDetail>{project.detail}</CardDetail>
                      <TagRow>
                        {project.tech.map((t) => (
                          <Tag key={t} $category={techCategory(t)}>
                            {t}
                          </Tag>
                        ))}
                      </TagRow>
                    </CardBody>
                  </FeatureCard>
                </Reveal>
              ))}
            </FeaturedList>
          </Container>
        </Section>

        <Section>
          <Container>
            <Reveal>
              <SectionEyebrow>Also built</SectionEyebrow>
            </Reveal>
            <Reveal delay={60}>
              <SectionTitle>Product work</SectionTitle>
            </Reveal>
            <MiniGrid>
              {otherProjects.map((project, i) => (
                <Reveal key={project.slug} delay={100 + i * 70}>
                  <MiniCard>
                    <MiniName>{project.name}</MiniName>
                    <MiniText>{project.description}</MiniText>
                    <MiniMeta>
                      {project.tech.map((t) => (
                        <Tag key={t} $category={techCategory(t)}>
                          {t}
                        </Tag>
                      ))}
                    </MiniMeta>
                  </MiniCard>
                </Reveal>
              ))}
            </MiniGrid>
          </Container>
        </Section>

        <Section id="stack">
          <Container>
            <Reveal>
              <SectionEyebrow>Stack</SectionEyebrow>
            </Reveal>
            <Reveal delay={60}>
              <SectionTitle>What I work with</SectionTitle>
            </Reveal>
            <Reveal delay={120}>
              <StackGrid>
                {skillGroups.map((group) => (
                  <StackGroup key={group.category}>
                    <StackLabel $category={group.category}>
                      {categoryLabels[group.category]}
                    </StackLabel>
                    <StackItems>
                      {group.skills.map((s) => (
                        <li key={s}>
                          <Tag $category={group.category}>{s}</Tag>
                        </li>
                      ))}
                    </StackItems>
                  </StackGroup>
                ))}
              </StackGrid>
            </Reveal>
            <Reveal delay={180}>
              <LearningRow>
                <LearningLabel>Currently learning</LearningLabel>
                {learning.map((item) => (
                  <Tag key={item} $variant="muted">
                    {item}
                  </Tag>
                ))}
              </LearningRow>
            </Reveal>
          </Container>
        </Section>

        <Section id="about">
          <Container>
            <Reveal>
              <SectionEyebrow>About</SectionEyebrow>
            </Reveal>
            <Reveal delay={60}>
              <SectionTitle>Background</SectionTitle>
            </Reveal>
            <AboutGrid>
              <Reveal delay={120}>
                <Prose>
                  <p>
                    I started in full-stack web development in Hobart — building an ordering system
                    and payment integration at <strong>My IT Studio</strong>, then front-end feature
                    work at the <strong>University of Tasmania</strong>, both in React and Node.
                  </p>
                  <p>
                    I spent the following two years outside of tech, working in warehouse management
                    and as a bus driver in Tasmania and Melbourne. I came back deliberately, into the
                    part of the field I actually want to be in: getting language models to behave
                    predictably inside real systems.
                  </p>
                  <p>
                    That&apos;s what <strong>OnCallOps</strong> is — the work I&apos;m doing now.
                    Making an AI agent safe to put in front of a paying customer turns out to be a
                    backend correctness problem more than a prompting one: holds that can&apos;t
                    double-book, confirmations that survive a retry, and hard guards on what the
                    model is permitted to promise.
                  </p>
                </Prose>
              </Reveal>
              <Reveal delay={180}>
                <ContactCard>
                  <ContactRow>
                    <ContactKey>email</ContactKey>
                    <ContactValue>
                      <a href={social.email.url}>{social.email.label}</a>
                    </ContactValue>
                  </ContactRow>
                  <ContactRow>
                    <ContactKey>github</ContactKey>
                    <ContactValue>
                      <a href={social.github.url} target="_blank" rel="noreferrer">
                        {social.github.label}
                      </a>
                    </ContactValue>
                  </ContactRow>
                  <ContactRow>
                    <ContactKey>linkedin</ContactKey>
                    <ContactValue>
                      <a href={social.linkedin.url} target="_blank" rel="noreferrer">
                        {social.linkedin.label}
                      </a>
                    </ContactValue>
                  </ContactRow>
                  <ContactRow>
                    <ContactKey>based</ContactKey>
                    <ContactValue>{location}</ContactValue>
                  </ContactRow>
                </ContactCard>
              </Reveal>
            </AboutGrid>
          </Container>
        </Section>

      </Main>
      <Footer />
      <BackToTop />
    </>
  )
}
