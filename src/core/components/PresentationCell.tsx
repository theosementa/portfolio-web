import { useTranslation } from "react-i18next"
import { FaBuilding } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { IoCalendar, IoSchoolSharp } from "react-icons/io5"
import { TbWorld } from "react-icons/tb"
import { Presentable } from "../../domain/interface/Presentable"
import { NetworkPath } from "../network/NetworkPath"

interface Props {
  item: Presentable
}

export const PresentationCell = ({ item }: Props) => {
  const { t } = useTranslation()
  const isExperience: boolean = item.type === "Experience"

  return (
    <div className="flex flex-col bg-background-100 rounded-2xl font-sans text-white">
      <img src={NetworkPath.baseUrl + item.banner} alt={item.entity} className="rounded-t-2xl" />
      <div className="flex flex-col p-6 gap-8 h-full">
        <div className="flex flex-col gap-6 h-full">
          <p className="font-semibold text-2xl">{t(item.title)}</p>
          <p className="font-medium text-xl">{t(item.description)}</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-center">
            {
              isExperience
                ? <FaBuilding className="w-6 h-6" />
                : <IoSchoolSharp className="w-6 h-6" />
            }
            <p className="font-medium text-xl">{t(item.entity)}</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <IoCalendar className="w-6 h-6" />
            <p className="font-medium text-xl">{t(item.startDate)} - {t(item.endDate)}</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <HiLocationMarker className="w-6 h-6" />
            <p className="font-medium text-xl">{item.location}</p>
          </div>
          <button onClick={() => window.open(item.website)}>
            <div className="flex flex-row gap-4 items-center">
              <TbWorld className="w-6 h-6" />
              <p className="font-medium text-xl underline">{item.website}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}