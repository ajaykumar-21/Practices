import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    productList: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    searhItem(state, action) {
      console.log(action.payload);
      const data = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter((items) =>
        items.title.toLowerCase().includes(data)
      );
    },
  },
});

export const { searhItem, productList } = searchSlice.actions;
export default searchSlice.reducer;
