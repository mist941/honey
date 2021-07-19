import {UserRepository} from "./user-repository";

export class AddressRepository extends UserRepository {

  protected setNode(): string {
    return super.setNode() + '/addresses';
  }

  constructor() {
    super();
  }

}