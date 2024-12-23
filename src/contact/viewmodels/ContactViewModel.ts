import { makeAutoObservable } from "mobx";
import { ContactService } from "../../core/network/ContactService";
import { SocialMedia } from "../../domain/models/SocialMedia";

export class ContactViewModel {
  static shared = new ContactViewModel()

  socialMedias: SocialMedia[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    const contactService = new ContactService()
    this.socialMedias = await contactService.fetchSocialMedia()
  }

}