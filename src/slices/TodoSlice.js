import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTo(state, action) {
      state.push(action.payload);
    },
    deleteList(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateList(state, action) {
      const { id, data } = action.payload;
      const matchItem = state.find((item) => item.id === id);
      if (matchItem) {
        matchItem.data = data;
      }
    },
  },
});

export const { addTo, deleteList, updateList } = TodoSlice.actions;
export default TodoSlice.reducer;
