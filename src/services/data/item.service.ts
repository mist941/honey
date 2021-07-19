import {BaseDataService} from "./base-data.service";
import {ItemRepository} from "../repositories/item.repository";

export class ItemService extends BaseDataService {

  constructor() {
    super(new ItemRepository());
  }

}