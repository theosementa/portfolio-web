import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { HomeSectionHeader } from "../../home/components/HomeSectionHeader"
import { SocialMediaCell } from "../components/SocialMediaCell"
import { ContactViewModel } from "../viewmodels/ContactViewModel"

export const Contact = observer(() => {
  const socialMedias = ContactViewModel.shared.socialMedias;

  useEffect(() => {
    ContactViewModel.shared.init()
  }, [])

  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <HomeSectionHeader
        title="Contact"
        subtitle="N'hésitez pas à me contacter pour toute information ou pour discuter !"
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