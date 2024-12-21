import { ExperienceData } from "../../domain/Experience"
import { SkillData } from "../../domain/Skill"
import { StudyData } from "../../domain/Study"
import { ExperienceCell } from "../../experience/components/ExperienceCell"
import { StudyCell } from "../../studies/components/StudyCell"
import { HeaderWithBio } from "../components/HeaderWithBio"
import { SkillRow } from "../components/SkillRow"
import { SkillsSection } from "../components/SkillsSection"

export const Home = () => {
  return (
    <div className="flex flex-col gap-24">
      <HeaderWithBio />

      <div className="flex flex-col gap-16">
        <SkillsSection title="Main Skills">
          {
            SkillData.mainSkills.map(skill => (
              <SkillRow key={skill.name} skill={skill} />
            ))
          }
        </SkillsSection>

        <SkillsSection title="Frontend Skills">
          {
            SkillData.frontendSkills.map(skill => (
              <SkillRow key={skill.name} skill={skill} />
            ))
          }
        </SkillsSection>

        <SkillsSection title="Backend Skills">
          {
            SkillData.backendSkills.map(skill => (
              <SkillRow key={skill.name} skill={skill} />
            ))
          }
        </SkillsSection>

        <SkillsSection title="Tools">
          {
            SkillData.tools.map(skill => (
              <SkillRow key={skill.name} skill={skill} />
            ))
          }
        </SkillsSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExperienceCell experience={ExperienceData.neopixl} />
          <ExperienceCell experience={ExperienceData.efluid} />
          <ExperienceCell experience={ExperienceData.antares} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StudyCell study={StudyData.master} />
          <StudyCell study={StudyData.bachelor} />
          <StudyCell study={StudyData.bts} />
      </div>
    </div>
  )
}