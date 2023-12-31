import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import { journalSlice } from './journal';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
  },
})

export default store;