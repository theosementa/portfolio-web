import { ProjectStatus } from "../../domain/enum/ProjectStatus"

interface Props {
  status: ProjectStatus
}

export const ProjectStatusRow = ({ status }: Props) => {

  const statusText = status === ProjectStatus.OPENSOURCE ? "Open Source" : "Privé"
  const color = status === ProjectStatus.OPENSOURCE ? "text-green-600" : "text-red-600"

  return (
    <div>
      <p className={`font-sans font-semibold text-xl ${color}`}>{statusText}</p>
    </div>
  )
}