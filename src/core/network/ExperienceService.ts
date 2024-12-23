import axios from "axios";
import { Experience } from "../../domain/models/Experience";
import { NetworkPath } from "./NetworkPath";

export class ExperienceService {

  async fetchExperiences(): Promise<Experience[]> {
    const response = await axios.get<Experience[]>(`${NetworkPath.baseUrl}${NetworkPath.Experience.base}`);
    return response.data;
  }

}