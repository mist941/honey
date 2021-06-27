import {createSlice} from '@reduxjs/toolkit';
import * as firebase from 'firebase';
import {AuthService} from "../services/auth/auth.service";
import {AuthParams} from "../services/auth/auth.strategy";

const authService = new AuthService();

const login = async (params: AuthParams, provider?: string) => {
  try {
    await authService
      .loginStrategy(provider)
      .login(params);
  } catch (err) {
    alert(err);
  }
};

const register = async (email: string, password: string) => {
  try {
    await firebase.default.auth().createUserWithEmailAndPassword(email, password)
      .then(user => console.log(user));
  } catch (err) {
    alert(err);
  }
};

const logout = async () => {
  try {
    await firebase.default.auth().signOut();
  } catch (err) {
    alert(err);
  }
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState: {
    currentuser: null,
  },
  reducers: {
    signup: (state, action) => {

    },
    login: (state, action) => {

    },
    lgout: (state) => {

    },
  },
});