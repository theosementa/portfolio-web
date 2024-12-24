import { useTranslation } from "react-i18next";
import { IoIosDownload } from "react-icons/io";
import { useParams } from "react-router-dom";
import { TagRow } from "../../core/components/TagRow";
import { TagsSection } from "../../core/components/TagsSection";
import { ActionButton } from "../../core/components/buttons/ActionButton";
import { ProjectStore } from "../../core/network/project/ProjectStore";
import { ActionButtonType } from "../../domain/enum/ActionButtonType";

export const ProjectDetail = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = ProjectStore.shared.projects.find((project) => project.name.toLowerCase() === projectName);

  const { t } = useTranslation();

  if (!project) {
    return <p className="text-white">Projet non trouvé</p>;
  }

  return (
    <div className="flex flex-col w-full px-24 gap-16 py-12">

      <div className="flex flex-col gap-8">
        <p className="font-sans text-6xl font-bold text-white" >{project.name} - {t(project.subtitle)}</p>
        {project.downloadLink && (
          <div className="max-w-[200px]">
            <ActionButton
              icon={IoIosDownload}
              text="Télécharger"
              isPrimary={true}
              type={ActionButtonType.medium}
              onClick={() => window.open(project.downloadLink)}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <img src={project.images.banner} alt="banner" className="w-full rounded-3xl" />
        <div className="grid grid-cols-3 gap-4">
          {
            project.images.images.map((image) => (
              <img src={image} alt="zfzf" className="w-full bg-background-100 rounded-3xl p-16" />
            ))
          }
        </div>
      </div>

      <div className="flex flex-col gap-16 w-full">
        {
          project.languages.length > 0 &&
          <TagsSection title="Langages">
            {project.languages.map((language) => (
              <TagRow key={language.name} item={language} />
            ))
            }
          </TagsSection>
        }
        {
          project.frameworks.length > 0 &&
          <TagsSection title="Frameworks">
            {project.frameworks.map((framework) => (
              <TagRow key={framework.name} item={framework} />
            ))
            }
          </TagsSection>
        }
      </div>
    </div>
  )
}