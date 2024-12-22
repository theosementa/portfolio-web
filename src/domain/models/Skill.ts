import { Taggable } from "./interface/Taggable"

export interface Skill extends Taggable {
  logo: string
  name: string
  link: string
}

export class SkillData {
  static swift: Skill = {
    logo: "/assets/images/skills/frontend/swift.svg",
    name: "Swift",
    link: "https://developer.apple.com/swift/",
  }
  static kotlin: Skill = {
    logo: "/assets/images/skills/frontend/kotlin.svg",
    name: "Kotlin",
    link: "https://kotlinlang.org/",
  }
  static typescript: Skill = {
    logo: "/assets/images/skills/frontend/typescript.svg",
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  }
  static react: Skill = {
    logo: "/assets/images/skills/frontend/react.svg",
    name: "React",
    link: "https://react.dev/",
  }
  static tailwind: Skill = {
    logo: "/assets/images/skills/frontend/tailwindcss.svg",
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  }

  static html: Skill = {
    logo: "/assets/images/skills/frontend/html5.svg",
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  }
  static css: Skill = {
    logo: "/assets/images/skills/frontend/css3.svg",
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  }
  static javascript: Skill = {
    logo: "/assets/images/skills/frontend/javascript.svg",
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  }
  static vue: Skill = {
    logo: "/assets/images/skills/frontend/vuedotjs.svg",
    name: "Vue",
    link: "https://vuejs.org/",
  }
  
  static nestjs: Skill = {
    logo: "/assets/images/skills/backend/nestjs.svg",
    name: "NestJS",
    link: "https://nestjs.com/",
  }
  static vapor: Skill = {
    logo: "/assets/images/skills/backend/vapor.svg",
    name: "Vapor",
    link: "https://vapor.codes/",
  }
  static symfony: Skill = {
    logo: "/assets/images/skills/backend/symfony.svg",
    name: "Symfony",
    link: "https://symfony.com/",
  }
  static postgresql: Skill = {
    logo: "/assets/images/skills/backend/postgresql.svg",
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
  }

  static git: Skill = {
    logo: "/assets/images/skills/tools/git.svg",
    name: "Git",
    link: "https://git-scm.com/",
  }
  static github: Skill = {
    logo: "/assets/images/skills/tools/github.svg",
    name: "GitHub",
    link: "https://github.com/",
  }
  static gitlab: Skill = {
    logo: "/assets/images/skills/tools/gitlab.svg",
    name: "GitLab",
    link: "https://gitlab.com/",
  }
  static docker: Skill = {
    logo: "/assets/images/skills/tools/docker.svg",
    name: "Docker",
    link: "https://www.docker.com/",
  }
  static vscode: Skill = {
    logo: "/assets/images/skills/tools/vscode.svg",
    name: "VS Code",
    link: "https://code.visualstudio.com/",
  }
  static xcode: Skill = {
    logo: "/assets/images/skills/tools/xcode.svg",
    name: "Xcode",
    link: "https://developer.apple.com/xcode/",
  }
  static androidstudio: Skill = {
    logo: "/assets/images/skills/tools/androidstudio.svg",
    name: "Android Studio",
    link: "https://developer.android.com/studio",
  }
  static postman: Skill = {
    logo: "/assets/images/skills/tools/postman.svg",
    name: "Postman",
    link: "https://www.postman.com/",
  }
  static figma: Skill = {
    logo: "/assets/images/skills/tools/figma.svg",
    name: "Figma",
    link: "https://www.figma.com/",
  }

  static mainSkills: Skill[] = [
    SkillData.swift,
    SkillData.kotlin,
    SkillData.typescript,
    SkillData.react,
    SkillData.tailwind
  ]

  static frontendSkills: Skill[] = [
    SkillData.html,
    SkillData.css,
    SkillData.javascript,
    SkillData.vue
  ]

  static backendSkills: Skill[] = [
    SkillData.nestjs,
    SkillData.vapor,
    SkillData.symfony,
    SkillData.postgresql
  ]
  
  static tools: Skill[] = [
    SkillData.git,
    SkillData.github,
    SkillData.gitlab,
    SkillData.docker,
    SkillData.vscode,
    SkillData.xcode,
    SkillData.androidstudio,
    SkillData.postman,
    SkillData.figma
  ]
}