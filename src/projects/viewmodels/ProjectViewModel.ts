import { makeAutoObservable } from "mobx";
import { ProjectService } from "../../core/network/ProjectService";
import { Project } from "../../domain/models/Project";

export class ProjectViewModel {
  static shared = new ProjectViewModel()

  projects: Project[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    const projectService = new ProjectService()
    this.projects = await projectService.fetchProjects()
  }

}