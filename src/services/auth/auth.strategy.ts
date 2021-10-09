import firebase from "firebase/app";

export interface AuthParams {
  email?: string,
  password?: string
}

export interface AuthStrategy {
  login: (params: AuthParams) => Promise<any>;
}

export class FacebookAuth implements AuthStrategy {
  login(): Promise<any> {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    return firebase
      .auth()
      .signInWithPopup(provider);
  }

}

export class GoogleAuth implements AuthStrategy {
  login(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider);
  }

}

export class EmailAuth implements AuthStrategy {
  login(params: AuthParams): Promise<any> {
    if (params.email && params.password) {
      return firebase
        .auth()
        .signInWithEmailAndPassword(params.email, params.password);
    } else {
      throw Error('EMPTY_CREDENTIALS');
    }
  }

}
