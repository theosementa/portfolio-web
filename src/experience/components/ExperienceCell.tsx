import { useTranslation } from "react-i18next"
import { HiLocationMarker } from "react-icons/hi"
import { IoCalendar, IoPerson } from "react-icons/io5"
import { TbWorld } from "react-icons/tb"
import { Experience } from "../../domain/Experience"

interface Props {
  experience: Experience
}

export const ExperienceCell = ({ experience }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col bg-background-100 rounded-2xl font-sans text-white">
      <img src={experience.banner} alt={experience.company} className="rounded-t-2xl" />
      <div className="flex flex-col p-6 gap-8 h-full">
        <div className="flex flex-col gap-6 h-full">
          <p className="font-semibold text-3xl">{experience.company}</p>
          <p className="font-medium text-xl">{t(experience.description)}</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-center">
            <IoPerson className="w-6 h-6" />
            <p className="font-medium text-xl">{t(experience.title)}</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <IoCalendar className="w-6 h-6" />
            <p className="font-medium text-xl">{t(experience.startDate)} - {t(experience.endDate)}</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <HiLocationMarker className="w-6 h-6" />
            <p className="font-medium text-xl">{experience.location}</p>
          </div>
          <button onClick={() => window.open(experience.website)}>
            <div className="flex flex-row gap-4 items-center">
              <TbWorld className="w-6 h-6" />
              <p className="font-medium text-xl underline">{experience.website}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}