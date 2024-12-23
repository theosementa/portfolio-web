import { makeAutoObservable } from "mobx"
import { ExperienceService } from "../../core/network/ExperienceService"
import { Experience } from "../../domain/models/Experience"

export class HomeViewModel {
  static shared = new HomeViewModel()

  experiences: Experience[] = []

  constructor() {
    makeAutoObservable(this)
    this.fetchExperiences()
  }

  async fetchExperiences() {
    const experienceService = new ExperienceService();
    try {
      this.experiences = await experienceService.fetchExperiences();
    } catch (error) {
      console.error("Failed to fetch experiences:", error);
    }
  }
  
}