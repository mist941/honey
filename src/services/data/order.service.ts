import {BaseDataService} from "./base-data.service";
import {OrderRepository} from "../repositories/order-repository";

export class OrderService extends BaseDataService {

  constructor() {
    super(new OrderRepository());
  }

}