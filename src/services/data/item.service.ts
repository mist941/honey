import {BaseDataService} from "./base-data.service";
import {ProductRepository} from "../repositories/item.repository";

export class ItemService extends BaseDataService {

  constructor() {
    super(new ProductRepository());
  }

}