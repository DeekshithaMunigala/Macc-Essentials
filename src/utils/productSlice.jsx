import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetails: {},
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },

    addProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const { addProducts, addProductDetails } = productSlice.actions;
export default productSlice.reducer;
