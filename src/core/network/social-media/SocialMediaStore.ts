import { makeAutoObservable } from "mobx";
import { SocialMedia } from "../../../domain/models/SocialMedia";
import { SocialMediaService } from "./SocialMediaService";

export class SocialMediaStore {
  static shared = new SocialMediaStore()

  socialMedias: SocialMedia[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    const contactService = new SocialMediaService()
    this.socialMedias = await contactService.fetchSocialMedia()
  }

}