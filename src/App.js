import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counetr = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  console.log(counetr);
  return (
    <div>
      <h1>Counter: {counetr}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>addBy</button>
    </div>
  );
}
export default App;
