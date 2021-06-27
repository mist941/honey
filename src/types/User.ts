export interface User {
  id: any;
  name?: string;
  email: string;
  registeredType?: RegisteredTypes;
}

export enum RegisteredTypes {
  default = 'default',
  google = 'google',
  facebook = 'facebook',
}
