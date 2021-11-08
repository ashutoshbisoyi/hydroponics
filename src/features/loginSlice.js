import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userLoggedIn: localStorage.getItem('userLoggedIn')
    ? localStorage.getItem('userLoggedIn')
    : false,
  adminLoggedIn: localStorage.getItem('adminLoggedIn')
    ? localStorage.getItem('adminLoggedIn')
    : false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login user');
      localStorage.setItem('userLoggedIn', true);
      return { adminLoggedIn: false, userLoggedIn: true };
    },
    logoutUser: (state, action) => {
      console.log('logout user');
      localStorage.removeItem('userLoggedIn');
      return { ...state, userLoggedIn: false };
    },
    loginAdmin: (state, action) => {
      console.log('login Admin');
      localStorage.setItem('adminLoggedIn', true);
      return { userLoggedIn: false, adminLoggedIn: true };
    },
    logoutAdmin: (state, action) => {
      console.log('logout Admin');
      localStorage.removeItem('adminLoggedIn');
      return { ...state, adminLoggedIn: false };
    },
  },
});

export const { loginUser, logoutUser, loginAdmin, logoutAdmin } =
  loginSlice.actions;

export const selectUserLoginStatus = (state) => state.login.userLoggedIn;
export const selectAdminLoginStatus = (state) => state.login.adminLoggedIn;

export default loginSlice.reducer;
