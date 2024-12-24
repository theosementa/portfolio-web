import { motion } from "framer-motion"
import { useEffect } from "react"
import { HomeSectionHeader } from "../../home/components/HomeSectionHeader"
import { ProjectCell } from "../components/ProjectCell"
import { ProjectViewModel } from "../viewmodels/ProjectViewModel"

export const ProjectsView = () => {
  const projects = ProjectViewModel.shared.projects

  useEffect(() => {
    ProjectViewModel.shared.init()
  }, [])

  return (
    <div className="flex flex-col gap-16">
      <HomeSectionHeader
        title="Projets"
        subtitle="Les projets personnels que j'ai réalisés pour renforcer mes compétences."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5, ease: "easeInOut" }}
        >
          <ProjectCell project={project} />
        </motion.div>
      ))}
      </div>
    </div>
  )
}