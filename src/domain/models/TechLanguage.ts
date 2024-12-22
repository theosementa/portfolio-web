import { Taggable } from "./interface/Taggable"

export interface TechLanguage extends Taggable {
  name: string
  logo: string
  link: string
}

export class TechLanguageData {
  static swift: TechLanguage = {
    name: "Swift",
    logo: "/assets/images/skills/frontend/swift.svg",
    link: "https://developer.apple.com/swift/"
  }
  static typescript: TechLanguage = {
    name: "TypeScript",
    logo: "/assets/images/skills/frontend/typescript.svg",
    link: "https://www.typescriptlang.org/"
  }
  static javascript: TechLanguage = {
    name: "JavaScript",
    logo: "/assets/images/skills/frontend/javascript.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  }
  static html: TechLanguage = {
    name: "HTML",
    logo: "/assets/images/skills/frontend/html5.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  }
  static css: TechLanguage = {
    name: "CSS",
    logo: "/assets/images/skills/frontend/css3.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  }
}