import { createSlice } from "@reduxjs/toolkit";
import { AllData } from "./Data";
  // ✅ yahan se import hoga

const productSlice = createSlice({
  name: "products",
  initialState: {
    sortedProducts: AllData, // ✅ data yahan use hoga
  },
  reducers: {
    sortProducts: (state, action) => {
      let sorted = [...state.sortedProducts];
      const type = action.payload;

      if (type === "Product A to Z") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (type === "Product Z to A") {
        sorted.sort((a, b) => b.name.localeCompare(a.name));
      }
      if (type === "Price High to Low") {
        sorted.sort((a, b) => b.price - a.price);
      }
      if (type === "Price Low to Hight") {
        sorted.sort((a, b) => a.price - b.price);
      }

      state.sortedProducts = sorted;
    },
  },
});

export const { sortProducts } = productSlice.actions;
export default productSlice.reducer;
