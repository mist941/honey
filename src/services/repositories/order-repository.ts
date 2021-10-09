import {UserRepository} from "./user-repository";

export class OrderRepository extends UserRepository {

  protected setNode(): string {
    return '/orders';
  }

  constructor() {
    super();
  }
}