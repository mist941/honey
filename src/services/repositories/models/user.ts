import {Statuses} from "../../status.service";
import {BaseModel} from "./base-model";

export interface User {
  name: string;
  email: string;
  uid: string;
}

export enum RegisteredTypes {
  default = 'default',
  google = 'google',
  facebook = 'facebook',
}

export interface Address extends BaseModel {
  detailed: string;
  city: string;
  novaPostAddress: string;
  createDate: Date;
  updateDate: Date;
}

export interface Order extends BaseModel {
  createDate: Date;
  updateDate: Date;
  deliveryDate: Date;
  status: Statuses;
  order: { [itemId: string]: number }[];
  totalPrice: number;
}
