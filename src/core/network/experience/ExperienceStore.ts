import { makeAutoObservable } from "mobx"
import { Experience } from "../../../domain/models/Experience"
import { ExperienceService } from "./ExperienceService"

export class ExperienceStore {
  static shared = new ExperienceStore()

  experiences: Experience[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    const experienceService = new ExperienceService()
    this.experiences = await experienceService.fetchExperiences()
  }
}