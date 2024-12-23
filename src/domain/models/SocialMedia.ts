import { Taggable } from "../interface/Taggable";

export interface SocialMedia extends Taggable {
  logo: string
  name: string
  link: string
}