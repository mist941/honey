import {createSlice} from '@reduxjs/toolkit';
import * as firebase from 'firebase';
import {AuthProviders} from '../services/auth/auth.providers';
import {AuthService} from '../services/auth/auth.service';
import {AuthParams} from '../services/auth/auth.strategy';
import { User } from '../types/User';

const authService = new AuthService();

const loginAction = async (params: AuthParams, provider?: AuthProviders) => {
  try {
    return await authService
      .loginStrategy(provider)
      .login(params);
  } catch (err) {
    alert(err);
  }
};

const registerAction = async (email: string, password: string) => {
  try {
    return await firebase.default.auth().createUserWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err);
  }
};

const logoutAction = async () => {
  try {
    await firebase.default.auth().signOut();
  } catch (err) {
    alert(err);
  }
};

interface State {
  currentUser: User | null;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState:<State> {
    currentUser: null
  },
  reducers: {
    signup: (state, action) => {
      const {email, password} = action.payload;
      registerAction(email, password).then(data => {
        console.log(data);
      });
    },
    login: (state, action) => {
      const {params, provider} = action.payload;
      loginAction(params, provider).then(data => {

      });
    },
    lgout: (state) => {

    },
  },
});

export const {signup, login, lgout} = authSlice.actions;

export default authSlice.reducer;
