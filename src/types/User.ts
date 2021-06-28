export interface User {
  id: any;
  email: string;
  registeredType?: RegisteredTypes;
  isAdmin?: boolean;
}

export enum RegisteredTypes {
  default = 'default',
  google = 'google',
  facebook = 'facebook',
}
