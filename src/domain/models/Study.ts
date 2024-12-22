export interface Study {
  title: string,
  banner: string,
  school: string,
  startDate: string,
  endDate: string,
  location: string,
  description: string,
  website: string,
}

export class StudyData {
  static master: Study = {
    title: "studies.master.title",
    banner: "/assets/images/studies/master-banner.jpg",
    school: "Metz Numeric School",
    startDate: "studies.master.startDate",
    endDate: "studies.master.endDate",
    location: "Metz, France",
    description: "studies.master.description",
    website: "https://www.metz-numeric-school.fr/"
  }

  static bachelor: Study = {
    title: "studies.bachelor.title",
    banner: "/assets/images/studies/bachelor-banner.jpg",
    school: "Metz Numeric School",
    startDate: "studies.bachelor.startDate",
    endDate: "studies.bachelor.endDate",
    location: "Metz, France",
    description: "studies.bachelor.description",
    website: "https://www.metz-numeric-school.fr/"
  }

  static bts: Study = {
    title: "studies.bts.title",
    banner: "/assets/images/studies/bts-banner.jpg",
    school: "UIMM Lorraine",
    startDate: "studies.bts.startDate",
    endDate: "studies.bts.endDate",
    location: "Yutz, France",
    description: "studies.bts.description",
    website: "https://www.uimm.fr/"
  }
}