import {BaseModel} from "./base-model";

export interface Item extends BaseModel {
  name: string;
  description: string;
  photo: string;
  createDate: Date;
  updateDate: Date;
}