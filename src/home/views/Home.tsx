import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { PresentationCell } from "../../core/components/PresentationCell"
import { TagRow } from "../../core/components/TagRow"
import { TagsSection } from "../../core/components/TagsSection"
import { ExperienceStore } from "../../core/network/experience/ExperienceStore"
import { SocialMediaStore } from "../../core/network/social-media/SocialMediaStore"
import { StudyStore } from "../../core/network/study/StudyStore"
import { SkillData } from "../../domain/models/Skill"
import { FooterView } from "../components/FooterView"
import { HeaderWithBio } from "../components/HeaderWithBio"
import { HomeSectionHeader } from "../components/HomeSectionHeader"
import { HomeViewModel } from "../viewmodels/HomeViewModel"

export const Home = observer(() => {
  const { t } = useTranslation()
  const experiences = ExperienceStore.shared.experiences
  const studies = StudyStore.shared.studies

  useEffect(() => {
    HomeViewModel.shared.init()
    SocialMediaStore.shared.init()
  }, [])
  
  return (
    <div className="flex flex-col gap-32">
      <HeaderWithBio />

      <div id="skills" className="flex flex-col gap-8 md:gap-16 px-4 md:px-12">
        <HomeSectionHeader
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="flex flex-col gap-12 bg-background-100 rounded-2xl p-6">
          <TagsSection title={t("skills.stack.main")}>
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

          <TagsSection title={t("skills.stack.tools")}>
            {
              SkillData.tools.map(skill => (
                <TagRow key={skill.name} item={skill} />
              ))
            }
          </TagsSection>
        </div>
      </div>

      <div id="experiences" className="flex flex-col gap-8 md:gap-16 px-4 md:px-12">
        <HomeSectionHeader
          title={t("experiences.title")}
          subtitle={t("experiences.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            experiences.map((experience) => (
              <PresentationCell key={experience.title} item={experience} />
            ))
          }
        </div>
      </div>

      <div id="studies" className="flex flex-col gap-8 md:gap-16 px-4 md:px-12">
        <HomeSectionHeader
          title={t("studies.title")}
          subtitle={t("studies.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            studies.map((study) => (
              <PresentationCell key={study.title} item={study} />
            ))
          }
        </div>
      </div>

      <FooterView />
    </div>
  )
})