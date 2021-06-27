import {createSlice} from '@reduxjs/toolkit';
import * as firebase from 'firebase';

const login = async (email: string, password: string) => {
  try {
    await firebase.default.auth().signInWithEmailAndPassword(email, password)
      .then(user => console.log(user));
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

export const authSlice = createSlice({
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

export default authSlice.reducer;
