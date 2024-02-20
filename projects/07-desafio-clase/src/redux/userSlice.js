import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ID: 0,
  description: "",
  stock: 0,
  price: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { ID, description, stock, price } = action.payload;
      state.ID = ID;
      state.description = description;
      state.stock = stock;
      state.price = price;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { addProduct, changeEmail } = productsSlice.actions;
export default productsSlice.reducer;