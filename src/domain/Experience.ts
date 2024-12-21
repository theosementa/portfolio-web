export interface Experience {
  title: string,
  company: string,
  startDate: string,
  endDate: string,
  location: string,
  description: string,
  website: string,
}

export class ExperienceData {
  static neopixl: Experience = {
    title: "iOS Developer",
    company: "Neopixl",
    startDate: "September 2023",
    endDate: "Present",
    location: "Differdange, Luxembourg",
    description: "Neoxipl are experts to support and guide you in the creation of your mobile app from A to Z. We are a team of passionate developers who are always looking for the best solutions to meet your needs.",
    website: "https://neopixl.lu/"
  }

  static efluid: Experience = {
    title: "Information Systems Tester",
    company: "Efluid",
    startDate: "September 2022",
    endDate: "September 2023",
    location: "Metz, France",
    description: "Efluid is a software company that provides solutions for the energy sector. I was in charge of testing the information systems developed by the company.",
    website: "https://www.efluid.com/"
  }

  static antares: Experience = {
    title: "Technician Helpdesk",
    company: "Antares",
    startDate: "September 2021",
    endDate: "September 2022",
    location: "Metz, France",
    description: "Antares is a company that provides IT services to other companies. I was in charge of providing technical support to users.",
    website: "https://www.antares.fr/"
  }
}