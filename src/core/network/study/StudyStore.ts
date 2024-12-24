import { makeAutoObservable } from "mobx"
import { Study } from "../../../domain/models/Study"
import { StudyService } from "./StudyService"

export class StudyStore {
  static shared = new StudyStore()

  studies: Study[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    const studyService = new StudyService()
    this.studies = await studyService.fetchStudies()
  }

}