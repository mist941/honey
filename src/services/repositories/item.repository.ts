import {UserRepository} from "./user-repository";
import {FirestoreBaseRepository} from "./base-repository";

export class ItemRepository extends FirestoreBaseRepository {

  protected setNode(): string {
    return '/item';
  }

  constructor() {
    super();
  }

}