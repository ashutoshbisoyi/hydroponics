import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginSlice';
import cartReducer from '../features/cartSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    cartItems: cartReducer,
  },
});
