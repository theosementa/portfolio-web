import { makeAutoObservable } from "mobx"
import { ExperienceService } from "../../core/network/ExperienceService"
import { StudyService } from "../../core/network/StudyService"
import { Experience } from "../../domain/models/Experience"
import { Study } from "../../domain/models/Study"

export class HomeViewModel {
  static shared = new HomeViewModel()

  experiences: Experience[] = []
  studies: Study[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    await Promise.all([
      this.fetchExperiences(),
      this.fetchStudies()
    ])
  }

  async fetchExperiences() {
    const experienceService = new ExperienceService();
    try {
      this.experiences = await experienceService.fetchExperiences();
    } catch (error) {
      console.error("Failed to fetch experiences:", error);
    }
  }

  async fetchStudies() {
    const studyService = new StudyService();
    try {
      this.studies = await studyService.fetchStudies();
    } catch (error) {
      console.error("Failed to fetch studies:", error);
    }
  }
  
}