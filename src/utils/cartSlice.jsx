import { createSlice } from "@reduxjs/toolkit";

const conversionRate = 83.52;

const calculateInrPrice = (price) => {
  const originalPrice = price ? parseFloat(price.replace("$", "")) : 0;
  return (originalPrice * conversionRate).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { asin, product_original_price } = action.payload;
      const existingItem = state.items.find((item) => item.asin === asin);

      const itemPrice = parseFloat(calculateInrPrice(product_original_price));

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        state.items.push(newItem);
      }

      state.totalAmount += itemPrice;
    },

    removeItem: (state) => {
      state.items.pop();
    },

    clearItem: (state) => {
      state.items.length = 0;
    },

    increaseItem: (state, action) => {
      const { asin, product_original_price } = action.payload;
      const item = state.items.find((item) => item.asin === asin);

      const itemPrice = parseFloat(calculateInrPrice(product_original_price));

      if (item) {
        item.quantity += 1;
        state.totalAmount += itemPrice;
      }
    },

    decreaseItem: (state, action) => {
      const { asin, product_original_price } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.asin === asin);

      const itemPrice = parseFloat(calculateInrPrice(product_original_price));

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        item.quantity -= 1;
        state.totalAmount -= itemPrice;
        if (item.quantity === 0) {
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addItem, removeItem, clearItem, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
