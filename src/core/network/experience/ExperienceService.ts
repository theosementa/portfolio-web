import axios from "axios";
import { Experience } from "../../../domain/models/Experience";
import { NetworkPath } from "../NetworkPath";

export class ExperienceService {

  async fetchExperiences(): Promise<Experience[]> {
    const response = await axios.get<Experience[]>(`${NetworkPath.baseUrl}${NetworkPath.Experience.base}`);
    const experiences = response.data.map(experience => new Experience(
      experience.entity,
      experience.title,
      experience.banner,
      experience.description,
      experience.startDate,
      experience.endDate,
      experience.location,
      experience.website
    ));
    return experiences;
  }

}