export interface Experience {
  title: string,
  banner: string,
  company: string,
  startDate: string,
  endDate: string,
  location: string,
  description: string,
  website: string,
}

export class ExperienceData {
  static neopixl: Experience = {
    title: "experiences.neopixl.title",
    banner: "/assets/images/experiences/neopixl-banner.jpg",
    company: "Neopixl",
    startDate: "experiences.neopixl.startDate",
    endDate: "experiences.neopixl.endDate",
    location: "Differdange, Luxembourg",
    description: "experiences.neopixl.description",
    website: "https://neopixl.lu/"
  }

  static efluid: Experience = {
    title: "experiences.efluid.title",
    banner: "/assets/images/experiences/efluid-banner.jpg",
    company: "Efluid",
    startDate: "experiences.efluid.startDate",
    endDate: "experiences.efluid.endDate",
    location: "Metz, France",
    description: "experiences.efluid.description",
    website: "https://www.efluid.com/"
  }

  static antares: Experience = {
    title: "experiences.antares.title",
    banner: "/assets/images/experiences/antares-banner.jpg",
    company: "Antares",
    startDate: "experiences.antares.startDate",
    endDate: "experiences.antares.endDate",
    location: "Metz, France",
    description: "experiences.antares.description",
    website: "https://www.antares.fr/"
  }
}