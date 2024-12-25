import { makeAutoObservable } from "mobx"
import { ExperienceStore } from "../../core/network/experience/ExperienceStore"
import { SocialMediaStore } from "../../core/network/social-media/SocialMediaStore"
import { StudyStore } from "../../core/network/study/StudyStore"

export class HomeViewModel {
  static shared = new HomeViewModel()

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    await Promise.all([
      ExperienceStore.shared.init(),
      StudyStore.shared.init(),
      SocialMediaStore.shared.init()
    ])
  }
  
}