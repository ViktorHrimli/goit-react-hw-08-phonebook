import { configureStore } from '@reduxjs/toolkit';
import { authSliceReducer } from './auth/authSlice';
import { filterReducer } from './contacts/filterSlice';
import { contactReducer } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filterContact: filterReducer,
    auth: authSliceReducer,
  },
});
