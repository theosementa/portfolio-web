import { makeAutoObservable } from "mobx"
import { ExperienceStore } from "../../core/network/experience/ExperienceStore"
import { StudyStore } from "../../core/network/study/StudyStore"

export class HomeViewModel {
  static shared = new HomeViewModel()

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    await Promise.all([
      ExperienceStore.shared.init(),
      StudyStore.shared.init()
    ])
  }
  
}