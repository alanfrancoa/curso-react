import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
  };

export const arraySlice = createSlice({
  name: "array",
  initialState,
  reducers: {
    addProducts: (state, action) => {
        return {
            ...state,
            products: [...state.products, action.payload]
        };
    },
    removeProductById: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(product => product.ID !== productId);
  }
  },
});

export const { addProducts, removeProductById} = arraySlice.actions;
export default arraySlice.reducer;