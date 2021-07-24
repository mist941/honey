import {createSlice} from '@reduxjs/toolkit';
import {User} from '../services/repositories/models/user';

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

    },
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {

    },
  },
});

export const {signup, login, logout} = authSlice.actions;

export default authSlice.reducer;
