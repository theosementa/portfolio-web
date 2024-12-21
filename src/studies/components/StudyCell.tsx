import { useTranslation } from "react-i18next"
import { HiLocationMarker } from "react-icons/hi"
import { IoCalendar, IoSchoolSharp } from "react-icons/io5"
import { TbWorld } from "react-icons/tb"
import { Study } from "../../domain/Study"

interface Props {
  study: Study
}

export const StudyCell = ({ study }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col bg-background-100 rounded-2xl font-sans text-white">
      <img src={study.banner} alt={study.title} className="rounded-t-2xl" />
      <div className="flex flex-col p-6 gap-8 h-full">
        <div className="flex flex-col gap-6 h-full">
          <p className="font-semibold text-3xl">{t(study.title)}</p>
          <p className="font-medium text-xl">{t(study.description)}</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-center">
            <IoSchoolSharp className="w-6 h-6" />
            <p className="font-medium text-xl">{t(study.school)}</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <IoCalendar className="w-6 h-6" />
            <p className="font-medium text-xl">{t(study.startDate)} - {t(study.endDate)}</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <HiLocationMarker className="w-6 h-6" />
            <p className="font-medium text-xl">{study.location}</p>
          </div>
          <button onClick={() => window.open(study.website)}>
            <div className="flex flex-row gap-4 items-center">
              <TbWorld className="w-6 h-6" />
              <p className="font-medium text-xl underline">{study.website}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}