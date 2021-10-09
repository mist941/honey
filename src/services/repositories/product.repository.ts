import {FirestoreBaseRepository} from "./base-repository";

export class ProductRepository extends FirestoreBaseRepository {

  protected setNode(): string {
    return '/products';
  }

  constructor() {
    super();
  }

}