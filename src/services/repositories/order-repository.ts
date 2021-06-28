import {UserRepository} from "./user-repository";

export class OrderRepository extends UserRepository {

  protected setNode(): string {
    return super.setNode() + '/orders';
  }

  constructor() {
    super();
  }

}