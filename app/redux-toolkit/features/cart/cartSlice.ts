"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  cartProducts: [],
  itemsNumber: 0,
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
      }
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (elem: { id: any }) => elem.id !== action.payload
      );
      state.itemsNumber = state.itemsNumber - 1;
    },
  },
});

export const { addToCartReducer, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
