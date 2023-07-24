"use client";

import { createSlice } from "@reduxjs/toolkit";

const isLocalStorageAvailable = () => typeof window !== "undefined";
// const cartItems = localStorage.getItem("cartItems");
// const items = cartItems !== null ? JSON.parse(cartItems) : [];

// const cartCount = localStorage.getItem("cartCount");
// const count = cartCount !== null ? JSON.parse(cartCount) : 0;

// const setItemFunc = (cartProducts: any, itemsNumber: any) => {
//   localStorage.setItem("cartItems", JSON.stringify(cartProducts));
//   localStorage.setItem("cartCount", JSON.stringify(itemsNumber));
// };
// Helper function to get initial cart items from localStorage or set default value
const getInitialCartItems = () => {
  if (isLocalStorageAvailable()) {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems !== null ? JSON.parse(cartItems) : [];
  }
  return [];
};

// Helper function to get initial cart count from localStorage or set default value
const getInitialCartCount = () => {
  if (isLocalStorageAvailable()) {
    const cartCount = localStorage.getItem("cartCount");
    return cartCount !== null ? JSON.parse(cartCount) : 0;
  }
  return 0;
};

// Helper function to update cart data in localStorage
const setCartData = (cartProducts:any, itemsNumber:any) => {
  if (isLocalStorageAvailable()) {
    localStorage.setItem("cartItems", JSON.stringify(cartProducts));
    localStorage.setItem("cartCount", JSON.stringify(itemsNumber));
  }

};
  const initialState = {
    cartProducts: getInitialCartItems(),
    itemsNumber: getInitialCartCount(),
  };
// const initialState: any = {
//   cartProducts: items,
//   itemsNumber: count,
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartReducer: (state, action) => {
      const { id, title, image, price, count } = action.payload;
      const newItem = { id, title, image, price, count };

      // Check if the item already exists in the cart
      const isItemInCart = state.cartProducts.some(
        (item: { id: any }) => item.id === id
      );
      if (!isItemInCart) {
        state.cartProducts = [...state.cartProducts, newItem];
        state.itemsNumber = state.itemsNumber + 1;
        setCartData(state.cartProducts, state.itemsNumber);
      }
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (elem: { id: any }) => elem.id !== action.payload
      );
      state.itemsNumber = state.itemsNumber - 1;
      setCartData(state.cartProducts, state.itemsNumber);
    },
  },
});

export const { addToCartReducer, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
