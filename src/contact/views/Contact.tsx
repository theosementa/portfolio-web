import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { SocialMediaStore } from "../../core/network/social-media/SocialMediaStore"
import { HomeSectionHeader } from "../../home/components/HomeSectionHeader"
import { SocialMediaCell } from "../components/SocialMediaCell"

export const Contact = observer(() => {
  const { t } = useTranslation()
  const socialMedias = SocialMediaStore.shared.socialMedias;

  useEffect(() => {
    SocialMediaStore.shared.init()
  }, [])

  return (
    <div className="flex flex-col items-center gap-12 w-full p-12">
      <HomeSectionHeader
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {
          socialMedias.map((sociaMedia) => (
            <SocialMediaCell key={sociaMedia.name} logo={sociaMedia.logo} name={sociaMedia.name} link={sociaMedia.link} />
          ))
        }
      </div>
    </div>
  )
})