// import { useDispatch, useSelector } from "react-redux";
// import { actions } from "./store/index";

// function App() {
//   const counetr = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   const increment = () => {
//     dispatch(actions.increment());
//   };

//   const decrement = () => {
//     dispatch(actions.decrement());
//   };

//   const addBy = () => {
//     dispatch(actions.addBy(10));
//   };
//   console.log(counetr);
//   return (
//     <div>
//       <h1>Counter: {counetr}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={addBy}>addBy</button>
//     </div>
//   );
// }
// export default App;

import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement, addBy } from "./Counter";
import SearchInput from "./components/todo/SearchInput";
import TodoList from "./components/todo/TodoList";

function App() {
  // const counter = useSelector((state) => state.count.value);
  // const dispatch = useDispatch();

  // const increment = () => {
  //   dispatch(increment());
  // };

  // const decrementByOne = () => {
  //   dispatch(decrement());
  // };
  return (
    <div>
      <SearchInput />
      <TodoList />
      {/* <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={decrementByOne}>Decrement</button>
      <button onClick={() => dispatch(addBy(10))}>AddBy</button> */}
      {/* <button onClick={addBy}>addBy</button> */}
    </div>
  );
}

export default App;
