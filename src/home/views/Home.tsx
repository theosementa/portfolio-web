import { ExperienceData } from "../../domain/Experience"
import { SkillData } from "../../domain/Skill"
import { StudyData } from "../../domain/Study"
import { ExperienceCell } from "../../experience/components/ExperienceCell"
import { StudyCell } from "../../studies/components/StudyCell"
import { HeaderWithBio } from "../components/HeaderWithBio"
import { HomeSectionHeader } from "../components/HomeSectionHeader"
import { SkillRow } from "../components/SkillRow"
import { SkillsSection } from "../components/SkillsSection"

export const Home = () => {
  return (
    <div className="flex flex-col gap-32">
      <HeaderWithBio />

      <div className="flex flex-col gap-16">
        <HomeSectionHeader title="Compétences" subtitle="Les compétences que j'ai acquise durant mon parcours." />
        <div className="flex flex-col gap-8">
          <SkillsSection title="Compétences principales">
            {
              SkillData.mainSkills.map(skill => (
                <SkillRow key={skill.name} skill={skill} />
              ))
            }
          </SkillsSection>

          <SkillsSection title="Frontend">
            {
              SkillData.frontendSkills.map(skill => (
                <SkillRow key={skill.name} skill={skill} />
              ))
            }
          </SkillsSection>

          <SkillsSection title="Backend">
            {
              SkillData.backendSkills.map(skill => (
                <SkillRow key={skill.name} skill={skill} />
              ))
            }
          </SkillsSection>

          <SkillsSection title="Outils">
            {
              SkillData.tools.map(skill => (
                <SkillRow key={skill.name} skill={skill} />
              ))
            }
          </SkillsSection>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <HomeSectionHeader title="Expériences" subtitle="Mes expériences profesionnelles depuis mon entré sur le marché du travail." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExperienceCell experience={ExperienceData.neopixl} />
          <ExperienceCell experience={ExperienceData.efluid} />
          <ExperienceCell experience={ExperienceData.antares} />
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <HomeSectionHeader title="Études" subtitle="Voici les études supérieures que j'ai éffectué." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StudyCell study={StudyData.master} />
          <StudyCell study={StudyData.bachelor} />
          <StudyCell study={StudyData.bts} />
        </div>
      </div>
    </div>
  )
}