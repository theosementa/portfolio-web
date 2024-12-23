import axios from "axios";
import { Study } from "../../domain/models/Study";
import { NetworkPath } from "./NetworkPath";

export class StudyService {
  
  async fetchStudies(): Promise<Study[]> {
    const response = await axios.get<Study[]>(`${NetworkPath.baseUrl}${NetworkPath.Study.base}`);
    return response.data;
  }

}