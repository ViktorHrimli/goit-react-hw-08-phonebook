import { createSlice } from '@reduxjs/toolkit';
import { fethcRegisterUser, fetchLogInUser } from './authOperations';

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
  },
});

export const authSliceReducer = authSlice.reducer;
export const authUserSelector = state => state.auth.user;
