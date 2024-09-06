import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },

    decrement(state) {
      state.value--;
    },

    addBy(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, addBy } = counterSlice.actions;
export default counterSlice.reducer;
