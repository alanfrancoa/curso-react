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
  },
});

export const { addProducts} = arraySlice.actions;
export default arraySlice.reducer;