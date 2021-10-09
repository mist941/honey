import {UserRepository} from "../repositories/user-repository";
import {BaseDataService} from "./base-data.service";

export class UserService extends BaseDataService {

  constructor() {
    super(new UserRepository());
  }

}