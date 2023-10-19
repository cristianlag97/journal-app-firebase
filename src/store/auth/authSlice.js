import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', //authenticated, not-authenticated, cheking
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated', //authenticated, not-authenticated, checking;
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoUrl = payload.photoUrl;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated', //authenticated, not-authenticated, checking;
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  }
});


 // Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice;
