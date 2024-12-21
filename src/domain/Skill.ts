export interface Skill {
  logo: string
  name: string
  link: string
  group: string
}

export class SkillData {
  static swift: Skill = {
    logo: "/assets/images/skills/frontend/swift.svg",
    name: "Swift",
    link: "https://swift.org/",
    group: "MainSkills"
  }
  static kotlin: Skill = {
    logo: "/assets/images/skills/frontend/kotlin.svg",
    name: "Kotlin",
    link: "https://kotlinlang.org/",
    group: "MainSkills"
  }
  static typescript: Skill = {
    logo: "/assets/images/skills/frontend/typescript.svg",
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    group: "MainSkills"
  }
  static react: Skill = {
    logo: "/assets/images/skills/frontend/react.svg",
    name: "React",
    link: "https://react.dev/",
     group: "MainSkills"
  }
  static tailwind: Skill = {
    logo: "/assets/images/skills/frontend/tailwindcss.svg",
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
     group: "MainSkills"
  }

  static html: Skill = {
    logo: "/assets/images/skills/frontend/html5.svg",
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    group: "Frontend"
  }
  static css: Skill = {
    logo: "/assets/images/skills/frontend/css3.svg",
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    group: "Frontend"
  }
  static javascript: Skill = {
    logo: "/assets/images/skills/frontend/javascript.svg",
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    group: "Frontend"
  }
  
  static nestjs: Skill = {
    logo: "/assets/images/skills/backend/nestjs.svg",
    name: "NestJS",
    link: "https://nestjs.com/",
    group: "Backend"
  }
  static vapor: Skill = {
    logo: "/assets/images/skills/backend/vapor.svg",
    name: "Vapor",
    link: "https://vapor.codes/",
    group: "Backend"
  }
  static symfony: Skill = {
    logo: "/assets/images/skills/backend/symfony.svg",
    name: "Symfony",
    link: "https://symfony.com/",
    group: "Backend"
  }
  static postgresql: Skill = {
    logo: "/assets/images/skills/backend/postgresql.svg",
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    group: "Backend"
  }

  static git: Skill = {
    logo: "/assets/images/skills/tools/git.svg",
    name: "Git",
    link: "https://git-scm.com/",
    group: "Tools"
  }
  static github: Skill = {
    logo: "/assets/images/skills/tools/github.svg",
    name: "GitHub",
    link: "https://github.com/",
    group: "Tools"
  }
  static gitlab: Skill = {
    logo: "/assets/images/skills/tools/gitlab.svg",
    name: "GitLab",
    link: "https://gitlab.com/",
    group: "Tools"
  }
  static docker: Skill = {
    logo: "/assets/images/skills/tools/docker.svg",
    name: "Docker",
    link: "https://www.docker.com/",
    group: "Tools"
  }
  static vscode: Skill = {
    logo: "/assets/images/skills/tools/vscode.svg",
    name: "VS Code",
    link: "https://code.visualstudio.com/",
    group: "Tools"
  }
  static xcode: Skill = {
    logo: "/assets/images/skills/tools/xcode.svg",
    name: "Xcode",
    link: "https://developer.apple.com/xcode/",
    group: "Tools"
  }
  static androidstudio: Skill = {
    logo: "/assets/images/skills/tools/androidstudio.svg",
    name: "Android Studio",
    link: "https://developer.android.com/studio",
    group: "Tools"
  }
  static postman: Skill = {
    logo: "/assets/images/skills/tools/postman.svg",
    name: "Postman",
    link: "https://www.postman.com/",
    group: "Tools"
  }
  static figma: Skill = {
    logo: "/assets/images/skills/tools/figma.svg",
    name: "Figma",
    link: "https://www.figma.com/",
    group: "Tools"
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
    SkillData.react,
    SkillData.tailwind
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