import { useTranslation } from "react-i18next";
import { ProjectStatus } from "../../domain/enum/ProjectStatus";

interface Props {
  status: ProjectStatus
}

export const ProjectStatusRow = ({ status }: Props) => {
  const { t } = useTranslation();

  const statusText = status === ProjectStatus.OPENSOURCE ? "Open Source" : t("word.private")
  const color = status === ProjectStatus.OPENSOURCE ? "bg-green-600" : "bg-red-600"
 
  return (
    <div className="flex flex-row gap-2 items-center bg-background-100 px-2 py-1 rounded-lg">
      <div className={`w-3 h-3 rounded-full ${color}`}>

      </div>
      <p className="font-sans font-semibold text-md text-white">{statusText}</p>
    </div>
  )
}