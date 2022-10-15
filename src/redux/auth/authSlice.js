import { createSlice } from '@reduxjs/toolkit';
import {
  fethcRegisterUser,
  fetchLogInUser,
  fetchLogOutUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [fethcRegisterUser.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [fetchLogInUser.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [fetchLogOutUser.fulfilled](state, actions) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authSliceReducer = authSlice.reducer;
export const authUserSelector = state => state.auth.user;
export const authTokenSelector = state => state.auth.token;
export const authIsLoginedSelector = state => state.auth.isLoggedIn;
