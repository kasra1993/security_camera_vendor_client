"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
