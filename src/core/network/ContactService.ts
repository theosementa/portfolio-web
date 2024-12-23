import axios from "axios";
import { SocialMedia } from "../../domain/models/SocialMedia";
import { NetworkPath } from "./NetworkPath";

export class ContactService {

  async fetchSocialMedia(): Promise<SocialMedia[]> {
    const response = await axios.get<SocialMedia[]>(`${NetworkPath.baseUrl}${NetworkPath.SocialMedia.base}`);
    return response.data;
  }

}