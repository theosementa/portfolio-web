import { TagRow } from "../../core/components/TagRow"
import { TagsSection } from "../../core/components/TagsSection"
import { SkillData } from "../../domain/models/Skill"
import { StudyData } from "../../domain/models/Study"
import { ExperienceCell } from "../../experience/components/ExperienceCell"
import { StudyCell } from "../../studies/components/StudyCell"
import { HeaderWithBio } from "../components/HeaderWithBio"
import { HomeSectionHeader } from "../components/HomeSectionHeader"
import { HomeViewModel } from "../viewmodels/HomeViewModel"

export const Home = () => {
  const experiences = HomeViewModel.shared.experiences

  return (
    <div className="flex flex-col gap-32">
      <HeaderWithBio />

      <div id="skills" className="flex flex-col gap-16">
        <HomeSectionHeader
          title="Compétences"
          subtitle="Les compétences que j'ai développées tout au long de mon parcours."
        />

        <div className="flex flex-col gap-8">
          <TagsSection title="Stack principale">
            {
              SkillData.mainSkills.map(skill => (
                <TagRow key={skill.name} item={skill} />
              ))
            }
          </TagsSection>

          <TagsSection title="Frontend">
            {
              SkillData.frontendSkills.map(skill => (
                <TagRow key={skill.name} item={skill} />
              ))
            }
          </TagsSection>

          <TagsSection title="Backend">
            {
              SkillData.backendSkills.map(skill => (
                <TagRow key={skill.name} item={skill} />
              ))
            }
          </TagsSection>

          <TagsSection title="Outils">
            {
              SkillData.tools.map(skill => (
                <TagRow key={skill.name} item={skill} />
              ))
            }
          </TagsSection>
        </div>
      </div>

      <div id="experiences" className="flex flex-col gap-16">
        <HomeSectionHeader
          title="Expériences"
          subtitle="Un résumé des rôles et responsabilités que j’ai assumés depuis mes débuts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            experiences.map((experience) => (
              <ExperienceCell key={experience.title} experience={experience} />
            ))
          }
        </div>
      </div>

      <div id="studies" className="flex flex-col gap-16">
        <HomeSectionHeader
          title="Études"
          subtitle="Un aperçu de mon parcours dans l'enseignement supérieur."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StudyCell study={StudyData.master} />
          <StudyCell study={StudyData.bachelor} />
          <StudyCell study={StudyData.bts} />
        </div>
      </div>
    </div>
  )
}