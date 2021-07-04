import {createSlice} from '@reduxjs/toolkit';
import * as firebase from 'firebase';
import {AuthProviders} from '../services/auth/auth.providers';
import {AuthService} from '../services/auth/auth.service';
import {AuthParams} from '../services/auth/auth.strategy';
import {User} from '../services/repositories/models/user';

const authService = new AuthService();

const loginAction = async (params: AuthParams, provider: AuthProviders) => {
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
  initialState: <State>{
    currentUser: null,
  },
  reducers: {
    signup: (state, action) => {
      const {email, password} = action.payload;
      let user = null;
      registerAction(email, password).then(data => {
        user = {
          id: data?.user?.uid,
          email: data?.user?.email ?? '',
        };
      });
      state.currentUser = user;
    },
    login: (state, action) => {
      const {email, password, provider} = action.payload;
      let user = null;
      loginAction({email, password}, provider).then(data => {
        user = {
          id: data.user.uid,
          email: data.user.email,
        };
      });
      state.currentUser = user;
    },
    logout: (state) => {

    },
  },
});

export const {signup, login, logout} = authSlice.actions;

export default authSlice.reducer;
