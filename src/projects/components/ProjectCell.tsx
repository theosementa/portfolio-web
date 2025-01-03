import { useTranslation } from "react-i18next";
import { IoIosDownload } from "react-icons/io";
import { useNavigate } from "react-router";
import { ActionButton } from "../../core/components/buttons/ActionButton";
import { DateRow } from "../../core/components/DateRow";
import { NetworkPath } from "../../core/network/NetworkPath";
import { Project } from "../../domain/models/Project";
import { ProjectStatusRow } from "./ProjectStatusRow";

interface Props {
  project: Project
}

export const ProjectCell = ({ project }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <div className="bg-background-100 rounded-2xl border-2 border-background-200 flex flex-col h-full">
      <div className="relative">
      <img
        src={NetworkPath.baseUrl + project.images.logo}
        alt="project logo"
        className="rounded-t-xl w-full h-auto"
      />
      <div className="absolute top-2 right-2">
        <ProjectStatusRow status={project.status} />
      </div>

    </div>

      <div className="text-white p-4 space-y-4 flex-grow pb-8">
        <p className="font-sans text-3xl font-semibold">{project.name}</p>
        <p className="font-sans text-xl font-medium">{t(project.subtitle)}</p>
        <p className="font-sans text-lg text-gray-400 font-medium">{t(project.presentation)}</p>
      </div>

      <div className="px-4 pb-4 space-y-4">
        <DateRow date={t(project.date)} />

        <div className="flex flex-row space-x-4">
          {project.downloadLink && (
            <ActionButton
              icon={IoIosDownload}
              text={t("word.download")}
              isPrimary={true}
              onClick={() => window.open(project.downloadLink)}
            />
          )}
          <ActionButton
            text={t("word.seeMore")}
            isPrimary={false}
            onClick={() => navigate(`/projects/${project.name.toLowerCase()}`)}
          />
        </div>
      </div>
    </div>
  )
}