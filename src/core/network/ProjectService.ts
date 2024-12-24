import axios from "axios";
import { Project } from "../../domain/models/Project";
import { NetworkPath } from "./NetworkPath";

export class ProjectService {

  async fetchProjects() {
    const response = await axios.get<Project[]>(`${NetworkPath.baseUrl}${NetworkPath.Project.base}`);
    return response.data;
  }

}