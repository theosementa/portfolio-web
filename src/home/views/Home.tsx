import { SkillData } from "../../domain/Skill"
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
    </div>
  )
}