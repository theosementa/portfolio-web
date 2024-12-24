import { ProjectStatus } from "../enum/ProjectStatus"
import { Framework } from "./Framework"
import { TechLanguage } from "./TechLanguage"

export interface ProjectImages {
  logo: string
  banner: string
  images: string[]
}

export interface Project {
  name: string
  images: ProjectImages
  subtitle: string
  presentation: string
  description: string
  date: string
  status: ProjectStatus
  downloadLink?: string
  languages: TechLanguage[]
  frameworks: Framework[]
}