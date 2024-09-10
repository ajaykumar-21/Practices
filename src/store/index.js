// import { createStore } from "redux";

// const reducerFn = (state = { counter: 0 }, action) => {
//   if (action.type === "INC") {
//     return { counter: state.counter + 1 };
//   }
//   if (action.type === "DEC") {
//     return { counter: state.counter - 1 };
//   }
//   if (action.type === "ADD") {
//     return { counter: state.counter + action.payload };
//   }
//   return state;
// };

// const store = createStore(reducerFn);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "../Counter";
import counterReducer from "../Counter";
import todoReducer from "../slices/TodoSlice";
import searchReducer from "../slices/Search";

const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
    search: searchReducer,
  },
});

export default store;

// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "Counter",
//   initialState: { counter: 0 },
//   reducers: {
//     increment(state, action) {
//       state.counter++;
//     },

//     decodeURIComponent(state, action) {
//       state.counter--;
//     },
//   },
// });

// export const action = counterSlice.actions;
// const store = configureStore({
//   reducer: createSlice.reducers,
// });

// export default store;
