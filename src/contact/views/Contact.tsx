import { HomeSectionHeader } from "../../home/components/HomeSectionHeader"
import { SocialMediaCell } from "../components/SocialMediaCell"

export const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <HomeSectionHeader
        title="Contact"
        subtitle="N'hésitez pas à me contacter pour toute information ou pour discuter !"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <SocialMediaCell icon="/assets/images/social-media/github.svg" name="Github" link="https://github.com/theosementa" />
        <SocialMediaCell icon="/assets/images/social-media/linkedin.svg" name="LinkedIn" link="https://www.linkedin.com/in/theosementa/" />
        <SocialMediaCell icon="/assets/images/social-media/x.svg" name="Twitter/X" link="https://twitter.com/theosementa" />
        <SocialMediaCell icon="/assets/images/social-media/discord.svg" name="Discord" link="https://discord.com/users/535025719777034250" />
        <SocialMediaCell icon="/assets/images/social-media/appstore.svg" name="App Store" link="https://apps.apple.com/fr/developer/theo-sementa/id1608409500" />
        <SocialMediaCell icon="/assets/images/social-media/gmail.svg" name="Mail" link="mailto:theosementa@gmail.com" />
      </div>
    </div>
  )
}