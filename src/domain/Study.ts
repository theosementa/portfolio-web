export interface Study {
  title: string,
  school: string,
  startDate: string,
  endDate: string,
  location: string,
  description: string,
  website: string,
}

export class StudyData {
  static master: Study = {
    title: "Master's degree in Management and Computer Science",
    school: "Metz Numeric Schoo",
    startDate: "October 2024",
    endDate: "October 2026",
    location: "Metz, France",
    description: "The Master's degree in Management and Computer Science is a two-year program that provides students with the skills and knowledge needed to work as IT project managers.",
    website: "https://www.metz-numeric-school.fr/"
  }

  static bachelor: Study = {
    title: "Bachelor's degree in Full Stack Web Development",
    school: "Metz Numeric School",
    startDate: "October 2023",
    endDate: "October 2024",
    location: "Metz, France",
    description: "The Bachelor's degree in Full Stack Web Development is a one-year program that provides students with the skills and knowledge needed to work as full stack web developers.",
    website: "https://www.metz-numeric-school.fr/"
  }

  static bts: Study = {
    title: "Brevet de Technicien Supérieur (BTS) in System and Network Administration",
    school: "UIMM Lorraine",
    startDate: "September 2021",
    endDate: "September 2023",
    location: "Yutz, France",
    description: "The BTS in System and Network Administration is a two-year program that provides students with the skills and knowledge needed to work as system and network administrators.",
    website: "https://www.uimm.fr/"
  }
}