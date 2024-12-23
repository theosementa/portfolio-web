import { Presentable } from "../interface/Presentable";

export class Experience implements Presentable { 
  readonly type = 'Experience';
  
  constructor(
    public entity: string,
    public title: string,
    public banner: string,
    public description: string,
    public startDate: string,
    public endDate: string,
    public location: string,
    public website: string,
  ) {
    this.entity = entity;
    this.title = title;
    this.banner = banner;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.website = website;
  }
}