// @ts-ignore
import { FieldPath, QuerySnapshot, WhereFilterOp }  from "firebase/app";
import firebase from "firebase/app";
import {BaseModel} from "./models/base-model";

export abstract class FirestoreBaseRepository {

  protected NODE: string = '';
  protected db: firebase.firestore.Firestore;

  protected abstract setNode(): string;

  protected constructor() {
    this.NODE = this.setNode();
    this.db = this.getDatabase();
  }

  getDatabase(): firebase.firestore.Firestore {
    return firebase.firestore();
  }

  getCollection() {
    return this
      .db
      .collection(this.NODE)
  }

  create(entity: BaseModel) {
    return this
      .getCollection()
      .add(entity)
  }

  get(id: string): Promise<QuerySnapshot<BaseModel>>{
    return this
      .getCollection()
      .doc(id)
      .get()
  }

  getWhere(field: string | FieldPath, condition: WhereFilterOp, value: any): Promise<QuerySnapshot<BaseModel>> {
    return this
      .getCollection()
      .where(field, condition, value)
      .get()
  }

  findAll() {
    return this
      .getCollection()
      .get()
  }

  update(id: string, params: any) {
    return this
      .getCollection()
      .doc(id)
      .update(params)
  }

  upsert(entity: BaseModel) {
    if (entity.id) {
      return this.update(entity.id, entity);
    }
    return this.create(entity);
  }

}