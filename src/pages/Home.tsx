import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'
import { GradientText } from '../components/ui/GradientText'
import { Tag } from '../components/ui/Tag'
import { Chip } from '../components/ui/Chip'
import { Button } from '../components/ui/Button'
import { projects, type ProjectHue } from '../data/projects'
import { social } from '../data/social'

const Main = styled.main`
  width: 100%;
`

// Content-width wrapper used *inside* each full-bleed section band, rather
// than one max-width wrapper around the whole page — this is what lets
// Projects/Contact carry their own full-bleed background tint (DESIGN.md §5
// "Section variation") instead of every section sharing one flat backdrop.
const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[8]};

  @media (max-width: 640px) {
    padding: 0 ${({ theme }) => theme.space[5]};
  }
`

// ---- Hero -------------------------------------------------------------

const HeroSection = styled.section`
  padding: ${({ theme }) => theme.space[10]} 0 ${({ theme }) => theme.space[9]};
  overflow: hidden;
`

const HeroGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: ${({ theme }) => theme.space[7]};
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 700;
  font-size: clamp(42px, 5vw, 76px);
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text[1]};
  margin: 0 0 ${({ theme }) => theme.space[6]};
`

const Sub = styled.p`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 19px;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.text[2]};
  max-width: 560px;
  margin: 0 0 ${({ theme }) => theme.space[6]};
`

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
  margin-bottom: ${({ theme }) => theme.space[7]};
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

// Decorative hero visual (right column): a small "layered device" cue — a
// stat/graph card and a terminal window overlapping, sat above three
// blurred gradient-color glows — standing in for real product screenshots
// (none exist yet) while giving the hero the right-side visual weight Gene
// asked for. It's the one place all three hues appear as glow shapes rather
// than flat UI, and it reacts on hover (glows intensify, cards lift).
const HeroVisual = styled.div`
  position: relative;
  width: 100%;
  height: 380px;

  @media (max-width: 900px) {
    display: none;
  }
`

const glowPosition = {
  purple: css`
    width: 240px;
    height: 240px;
    top: 10px;
    left: 40px;
    background: ${({ theme }) => theme.color.accent};
    opacity: 0.45;
  `,
  blue: css`
    width: 200px;
    height: 200px;
    top: 100px;
    right: 40px;
    background: ${({ theme }) => theme.color.blue};
    opacity: 0.4;
  `,
  peach: css`
    width: 180px;
    height: 180px;
    bottom: 0;
    left: 100px;
    background: ${({ theme }) => theme.color.peach};
    opacity: 0.35;
  `,
} as const

const Glow = styled.div<{ $hue: keyof typeof glowPosition }>`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  ${({ $hue }) => glowPosition[$hue]}

  ${HeroVisual}:hover & {
    opacity: 0.75;
    transform: scale(1.08);
  }
`

const StatCard = styled.div`
  position: absolute;
  top: 24px;
  right: 12px;
  width: 200px;
  padding: ${({ theme }) => theme.space[4]};
  background: ${({ theme }) => theme.color.ink[900]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 14px;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45);
  transform: rotate(7deg);
  transition: transform 0.4s ease;
  z-index: 1;

  ${HeroVisual}:hover & {
    transform: rotate(4deg) translateY(-4px);
  }
`

const StatBar = styled.div<{ $hue: 'purple' | 'blue' | 'peach'; $width: string }>`
  height: 8px;
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.space[2]};
  width: ${({ $width }) => $width};
  background: ${({ theme, $hue }) =>
    $hue === 'purple' ? theme.color.accent : $hue === 'blue' ? theme.color.blue : theme.color.peach};
`

const TerminalMock = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 320px;
  background: ${({ theme }) => theme.color.ink[900]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 14px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  transform: rotate(-4deg);
  transition: transform 0.4s ease;
  z-index: 2;
  overflow: hidden;

  ${HeroVisual}:hover & {
    transform: rotate(-2deg) translateY(-8px);
  }
`

const TerminalDots = styled.div`
  display: flex;
  gap: 6px;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.border};
  }
`

const TerminalBody = styled.div`
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[5]};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12.5px;
  line-height: 2;
`

const TMuted = styled.div`
  color: ${({ theme }) => theme.color.text[3]};
`

const TAccent = styled.div`
  color: ${({ theme }) => theme.color.accent2};
`

// ---- Section bands ------------------------------------------------------

// Each major section now gets its own full-bleed background treatment
// (DESIGN.md §5 "Section variation") so the page doesn't read as one
// repeating dark-card pattern top to bottom: Hero sits on the base ink with
// corner glows, Projects sits on a lighter tinted band, Contact sits on a
// band with its own two-tone corner wash.
const Band = styled.section`
  padding: ${({ theme }) => theme.space[9]} 0;
`

const ProjectsBand = styled(Band)`
  background: ${({ theme }) => theme.color.ink[900]};
  border-top: 1px solid ${({ theme }) => theme.color.borderSoft};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderSoft};
`

const ContactBand = styled(Band)`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.color.ink[950]};
  background-image: radial-gradient(circle at 90% 10%, rgba(79, 140, 255, 0.12), transparent 45%),
    radial-gradient(circle at 5% 90%, rgba(255, 157, 114, 0.1), transparent 45%);
`

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

// ---- Project cards --------------------------------------------------

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[5]};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const hueGlow: Record<ProjectHue, string> = {
  purple: 'rgba(139, 110, 255, 0.28)',
  blue: 'rgba(79, 140, 255, 0.28)',
  peach: 'rgba(255, 157, 114, 0.28)',
}

const hueColor = (theme: import('styled-components').DefaultTheme, hue: ProjectHue) =>
  hue === 'purple' ? theme.color.accent : hue === 'blue' ? theme.color.blue : theme.color.peach

// Each card carries a `$hue` (DESIGN.md §5 "Cards") that colors its top bar,
// its category tag, and its hover border/glow — this is the concrete fix
// for "monotonous": three cards that used to be visually identical now read
// as distinct at a glance, without breaking the no-left-border-stripe rule
// (the accent lives on top, not the left edge).
const Card = styled.div<{ $hue: ProjectHue }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.color.ink[800]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme, $hue }) => hueColor(theme, $hue)};
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.4), 0 0 40px ${({ $hue }) => hueGlow[$hue]};
  }
`

const CardBar = styled.div<{ $hue: ProjectHue }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  opacity: 0.8;
  background: ${({ theme, $hue }) => hueColor(theme, $hue)};
  transition: opacity 0.3s ease, height 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
    height: 5px;
  }
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
  transition: color 0.25s ease, gap 0.25s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
    text-decoration: none;
    gap: ${({ theme }) => theme.space[3]};
  }

  &:hover svg {
    transform: translateX(3px);
  }
`

// ---- Contact -------------------------------------------------------

// Gradient hairline border via the padding-box/xor-mask trick — a small,
// deliberate use of the multi-hue gradient as a frame rather than a fill,
// so the terminal panel reads as a distinct "sealed" element within the
// Contact band (DESIGN.md §5 "Contact block").
const TerminalPanel = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13.5px;
  line-height: 2;
  background: ${({ theme }) => theme.color.ink[900]};
  border-radius: 12px;
  padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[6]};
  max-width: 520px;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 13px;
    padding: 1px;
    background: ${({ theme }) => theme.color.gradient};
    opacity: 0.5;
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
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
  transition: color 0.25s ease, text-shadow 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
    text-shadow: 0 0 16px rgba(139, 110, 255, 0.5);
  }
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
          <HeroGrid>
            <div>
              <SectionEyebrow>// software engineer</SectionEyebrow>
              <Headline>
                I build <GradientText>practical tools</GradientText> that make complicated decisions
                simple.
              </Headline>
              <Sub>
                A portfolio of independently-built web apps — from a tax-planning calculator to a
                weather-driven outfit recommender — plus my resume, for recruiters and collaborators.
              </Sub>
              <ChipRow>
                <Chip $hue="purple">React</Chip>
                <Chip $hue="blue">TypeScript</Chip>
                <Chip $hue="peach">Full-stack</Chip>
                <Chip $hue="purple">Independent builder</Chip>
              </ChipRow>
              <Ctas>
                <Button href="#projects">
                  View projects
                  <ArrowIcon />
                </Button>
                <Button as={Link} to="/resume" $variant="secondary">
                  View resume
                </Button>
              </Ctas>
            </div>
            <HeroVisual>
              <Glow $hue="purple" />
              <Glow $hue="blue" />
              <Glow $hue="peach" />
              <StatCard>
                <StatBar $hue="purple" $width="90%" />
                <StatBar $hue="blue" $width="65%" />
                <StatBar $hue="peach" $width="40%" />
              </StatCard>
              <TerminalMock>
                <TerminalDots>
                  <span />
                  <span />
                  <span />
                </TerminalDots>
                <TerminalBody>
                  <TMuted>$ npm run build</TMuted>
                  <TAccent>✓ build complete</TAccent>
                  <TMuted>$ git push origin main</TMuted>
                  <TAccent>✓ deployed</TAccent>
                </TerminalBody>
              </TerminalMock>
            </HeroVisual>
          </HeroGrid>
        </HeroSection>

        <ProjectsBand id="projects">
          <Container>
            <SectionEyebrow>// projects</SectionEyebrow>
            <SectionHeading>Selected work</SectionHeading>
            <SectionIntro>
              Three independent projects, each solving one concrete real-world decision end to end —
              spec, build, and ship.
            </SectionIntro>
            <CardGrid>
              {projects.map((project) => (
                <Card key={project.slug} $hue={project.hue}>
                  <CardBar $hue={project.hue} />
                  <Tag $variant="category" $hue={project.hue}>
                    {project.category}
                  </Tag>
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
          </Container>
        </ProjectsBand>

        <ContactBand id="contact">
          <Container>
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
          </Container>
        </ContactBand>
      </Main>
    </>
  )
}
