// @ts-ignore
import {FieldPath, QuerySnapshot, WhereFilterOp} from "firebase/app";
import firebase from "firebase/app";
import {BaseModel} from "./models/base-model";
import Firestore = firebase.firestore.Firestore;

export abstract class FirestoreBaseRepository {

  protected NODE: string = '';
  protected db: Firestore;

  protected abstract setNode(): string;

  protected constructor() {
    this.NODE = this.setNode();
    this.db = this.getDatabase();
  }

  getDatabase(): Firestore {
    return firebase.firestore();
  }

  getCollection() {
    return this
      .db
      .collection(this.NODE);
  }

  create(entity: any) {
    return this
      .getCollection()
      .add(entity);
  }

  get(id: string): Promise<QuerySnapshot<BaseModel>> {
    return this
      .getCollection()
      .doc(id)
      .get();
  }

  update(id: string, params: any) {
    return this
      .getCollection()
      .doc(id)
      .update(params);
  }

  delete(id?: string) {
    return this
      .getCollection()
      .doc(id)
      .delete();
  }

  getWhere(field: string | FieldPath, condition: WhereFilterOp, value: any): Promise<QuerySnapshot<BaseModel>> {
    return this
      .getCollection()
      .where(field, condition, value)
      .get();
  }

  findAll() {
    return this
      .getCollection()
      .get();
  }

  upsert(entity: BaseModel) {
    if (entity.id) {
      return this.update(entity.id, entity);
    }
    return this.create(entity);
  }

}