import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem('itemsInCart')
    ? JSON.parse(localStorage.getItem('itemsInCart'))
    : [],
};

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const currentItems = current(state).items;
      const itemExists = (id) => {
        return currentItems.some((el) => {
          return el.id === id;
        });
      };
      if (itemExists(action.payload)) {
        console.log('present');
      } else {
        state.items.push(action.payload);
        const currentState = localStorage.getItem('itemsInCart')
          ? JSON.parse(localStorage.getItem('itemsInCart'))
          : [];
        currentState.push(action.payload);
        localStorage.setItem('itemsInCart', JSON.stringify(currentState));
      }
    },
    removeItemFromCart: (state, action) => {
      const currentItems = current(state).items;
      const updatedItems = currentItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem('itemsInCart', JSON.stringify(updatedItems));
      return { ...state, items: updatedItems };
    },
    increaseQuantity: (state, action) => {
      const currentItems = current(state).items;
      const updatedItems = currentItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem('itemsInCart', JSON.stringify(updatedItems));
      return { ...state, items: updatedItems };
    },
    decreaseQuantity: (state, action) => {
      const currentItems = current(state).items;
      const updatedItems = currentItems.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      localStorage.setItem('itemsInCart', JSON.stringify(updatedItems));

      return { ...state, items: updatedItems };
    },
  },
});

export const {
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cartItems.items;

export default cartSlice.reducer;
