import firebase from 'firebase';
import AuthProvider = firebase.auth.AuthProvider;
import {Statuses} from "../../status.service";
import {BaseModel} from "./base-model";

export interface User extends BaseModel {
  name: string;
  lastname: string;
  provider: AuthProvider;
  uid: string;
  orders: Order[];
  addresses: Address[];
  createDate: Date;
  updateDate: Date;
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
