import { useState } from "react"
import { TextField } from "../../core/components/textfields/TextField"
import { HomeSectionHeader } from "../../home/components/HomeSectionHeader"
import { SocialMediaCell } from "../components/SocialMediaCell"

export const Contact = () => {
  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  return (
    <div className="flex flex-col items-center gap-12 w-full">

      <HomeSectionHeader title="Contact" subtitle="N'hésitez pas à me contacter pour tout renseignement ou juste discuter !"/>

      <div className="flex felx-row gap-8">
        <SocialMediaCell icon="/assets/images/social-media/github.svg" name="Github" link="https://github.com/theosementa" />
        <SocialMediaCell icon="/assets/images/social-media/linkedin.svg" name="LinkedIn" link="https://www.linkedin.com/in/theosementa/" />
        <SocialMediaCell icon="/assets/images/social-media/x.svg" name="Twitter/X" link="https://twitter.com/theosementa" />
        <SocialMediaCell icon="/assets/images/social-media/appstore.svg" name="App Store" link="https://apps.apple.com/fr/developer/theo-sementa/id1608409500" />
        <SocialMediaCell icon="/assets/images/social-media/gmail.svg" name="Mail" link="mailto:theosementa@gmail.com" />
      </div>

      <div className="flex flex-col gap-8 bg-background-100 p-8 rounded-xl w-full lg:w-2/3">
        <TextField
          title="Email"
          value={email}
          type="email"
          onChange={(email) => {
            setEmail(email)
          }}
        />
        <TextField
          title="Name"
          value={name}
          type="text"
          onChange={(name) => {
            setName(name)
          }}
        />
        <TextField
          title="Subject"
          value={subject}
          type="subject"
          onChange={(subject) => {
            setSubject(subject)
          }}
        />
        <TextField
          title="Message"
          value={message}
          type="message"
          onChange={(message) => {
            setMessage(message)
          }}
        />
      </div>
    </div>
  )
}