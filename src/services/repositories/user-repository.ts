import {FirestoreBaseRepository} from "./base-repository";

export class UserRepository extends FirestoreBaseRepository {

  protected setNode(): string {
    return "/users";
  }

  constructor() {
    super();
  }

}