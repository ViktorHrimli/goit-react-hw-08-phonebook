import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fethcRegisterUser = createAsyncThunk(
  'auth/register',
  async (user, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchLogInUser = createAsyncThunk(
  'auth/logIn',
  async (user, thunkApi) => {
    try {
      const { data } = await axios.post('/users/login', user);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchLogOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await axios.post('/users/logout');
      clearAuthToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
