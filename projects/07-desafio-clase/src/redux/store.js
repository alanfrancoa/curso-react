import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});