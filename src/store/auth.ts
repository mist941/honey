import {createSlice} from '@reduxjs/toolkit';
import {RegisteredTypes, User} from '../services/repositories/models/user';

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
      state.currentUser = {
        name: action.payload.email,
        email: action.payload.email,
        uid: action.payload.uid,
      };
    },
    login: (state, action) => {
      state.currentUser = {
        name: action.payload.email,
        email: action.payload.email,
        uid: action.payload.uid,
      };
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const {signup, login, logout} = authSlice.actions;

export default authSlice.reducer;
