import { Framework, FrameworkData } from "./Framework"
import { TechLanguage, TechLanguageData } from "./TechLanguage"

export interface ProjectImages {
  logo: string
  banner: string
  images: string[]
}

export interface Project {
  name: string
  images: ProjectImages
  subtitle: string
  presentation: string
  description: string
  date: string
  downloadLink: string | undefined
  languages: TechLanguage[]
  frameworks: Framework[]
}

export class ProjectData {
  static cashflow: Project = {
    name: "CashFlow",
    images: {
      logo: "/assets/images/projects/cashflow/CashFlowLogo.png",
      banner: "/assets/images/projects/cashflow/CashFlowBanner.jpg",
      images: [
        "/assets/images/projects/cashflow/mockups/fr/HomeView.png",
        "/assets/images/projects/cashflow/mockups/fr/CategoriesView.png",
        "/assets/images/projects/cashflow/mockups/fr/AnalyticsView.png"
      ]
    },
    subtitle: "projects.cashflow.subtitle",
    presentation: "projects.cashflow.presentation",
    description: "projects.cashflow.description",
    date: "projects.cashflow.date",
    downloadLink: "https://apps.apple.com/fr/app/cashflow-suivi-des-d%C3%A9penses/id6450913423?platform=iphone",
    languages: [TechLanguageData.swift],
    frameworks: [FrameworkData.swiftUI, FrameworkData.charts, FrameworkData.storeKit, FrameworkData.appIntents, FrameworkData.coreData, FrameworkData.cloudKit, FrameworkData.visionKit, FrameworkData.userNotifications, FrameworkData.googleSignIn, FrameworkData.authenticationServices],
  }

  static cyclo: Project = {
    name: "Cyclo",
    images: {
      logo: "/assets/images/projects/cyclo/CycloLogo.png",
      banner: "/assets/images/projects/cyclo/CycloBanner.jpg",
      images: []
    },
    subtitle: "projects.cyclo.subtitle",
    presentation: "projects.cyclo.presentation",
    description: "projects.cyclo.description",
    date: "projects.cyclo.date",
    downloadLink: "https://github.com/theosementa/Cyclo",
    languages: [TechLanguageData.swift],
    frameworks: [FrameworkData.swiftUI, FrameworkData.healthKit, FrameworkData.mapKit, FrameworkData.charts, FrameworkData.coreData],
  }

  static ecoTime: Project = {
    name: "EcoTime",
    images: {
      logo: "/assets/images/projects/ecotime/EcoTimeLogo.png",
      banner: "/assets/images/projects/ecotime/EcoTimeBanner.jpg",
      images: []
    },
    subtitle: "projects.ecoTime.subtitle",
    presentation: "projects.ecoTime.presentation",
    description: "projects.ecoTime.description",
    date: "projects.ecoTime.date",
    downloadLink: "https://github.com/theosementa/EcoTime",
    languages: [TechLanguageData.swift],
    frameworks: [FrameworkData.swiftUI, FrameworkData.deviceActivity, FrameworkData.familyControls, FrameworkData.managedSettings],
  }

  static split: Project = {
    name: "Split",
    images: {
      logo: "/assets/images/projects/split/SplitLogo.png",
      banner: "/assets/images/projects/split/SplitBanner.jpg",
      images: []
    },
    subtitle: "projects.split.subtitle",
    presentation: "projects.split.presentation",
    description: "projects.split.description",
    date: "projects.split.date",
    downloadLink: "https://apps.apple.com/fr/app/split-partager-les-d%C3%A9penses/id6504157641",
    languages: [TechLanguageData.swift],
    frameworks: [FrameworkData.swiftUI, FrameworkData.googleSignIn, FrameworkData.authenticationServices, FrameworkData.lottie, FrameworkData.socketIO, FrameworkData.photoUI, FrameworkData.storeKit],
  }

  static tyradex: Project = {
    name: "Tyradex",
    images: {
      logo: "/assets/images/projects/tyradex/TyradexLogo.png",
      banner: "/assets/images/projects/tyradex/TyradexBanner.jpg",
      images: []
    },
    subtitle: "projects.tyradex.subtitle",
    presentation: "projects.tyradex.presentation",
    description: "projects.tyradex.description",
    date: "projects.tyradex.date",
    downloadLink: "https://github.com/theosementa/Tyradex",
    languages: [TechLanguageData.swift],
    frameworks: [FrameworkData.swiftUI, FrameworkData.tyradexkit]
  }

  static tyradexKit: Project = {
    name: "TyradexKit",
    images: {
      logo: "/assets/images/projects/tyradex/TyradexLogo.png",
      banner: "/assets/images/projects/tyradex/TyradexBanner.jpg",
      images: []
    },
    subtitle: "projects.tyradexKit.subtitle",
    presentation: "projects.tyradexKit.presentation",
    description: "projects.tyradexKit.description",
    date: "projects.tyradexKit.date",
    downloadLink: "https://github.com/theosementa/TyradexKit",
    languages: [TechLanguageData.swift],
    frameworks: [],
  }

  static portfolio: Project = {
    name: "Portfolio",
    images: {
      logo: "/assets/images/theosementa.jpg",
      banner: "",
      images: []
    },
    subtitle: "projects.portfolio.subtitle",
    presentation: "projects.portfolio.presentation",
    description: "projects.portfolio.description",
    date: "projects.portfolio.date",
    downloadLink: "https://github.com/theosementa/portfolio",
    languages: [TechLanguageData.typescript, TechLanguageData.javascript, TechLanguageData.html, TechLanguageData.css],
    frameworks: [],
  }

  static projects: Project[] = [
    this.cashflow, this.cyclo, this.ecoTime, this.split, this.tyradex, this.tyradexKit, this.portfolio
  ]
}