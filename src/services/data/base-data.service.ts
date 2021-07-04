import {FirestoreBaseRepository} from "../repositories/base-repository";

export class BaseDataService {

  constructor(protected readonly repository: FirestoreBaseRepository) {
  }

}