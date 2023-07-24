"use client";

import { createSlice } from "@reduxjs/toolkit";

const cartItems = localStorage.getItem("cartItems");
const items = cartItems !== null ? JSON.parse(cartItems) : [];

const cartCount = localStorage.getItem("cartCount");
const count = cartCount !== null ? JSON.parse(cartCount) : 0;

const setItemFunc = (cartProducts: any, itemsNumber: any) => {
  localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  localStorage.setItem("cartCount", JSON.stringify(itemsNumber));
};
const initialState: any = {
  cartProducts: items,
  itemsNumber: count,
};

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
        setItemFunc(state.cartProducts, state.itemsNumber);
      }
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (elem: { id: any }) => elem.id !== action.payload
      );
      state.itemsNumber = state.itemsNumber - 1;
      setItemFunc(state.cartProducts, state.itemsNumber);
    },
  },
});

export const { addToCartReducer, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
