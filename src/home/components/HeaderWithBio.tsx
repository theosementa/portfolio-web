import { useTranslation } from "react-i18next"

export const HeaderWithBio = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col font-sans text-white gap-6 px-12 pt-12">
      <p className="font-black text-6xl">Software developer</p>
      <p className="text-xl font-medium ">{t("theo.bio")}</p>
    </div>
  )
}