import { makeAutoObservable } from "mobx";
import { Project } from "../../../domain/models/Project";
import { ProjectService } from "./ProjectService";

export class ProjectStore {
  static shared = new ProjectStore()

  projects: Project[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    const projectService = new ProjectService()
    this.projects = await projectService.fetchProjects()
  }

}