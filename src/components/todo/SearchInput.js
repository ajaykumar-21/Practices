import React, { useState } from "react";
import { addTo } from "../../slices/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

function SearchInput() {
  const [inputSearch, setInputsearch] = useState("");
  const userInput = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  // console.log(userInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputSearch.length >= 1) {
      dispatch(addTo({ id: userInput.length + 1, data: inputSearch }));
      setInputsearch("");
    }
  };
  return (
    <div>
      <h1>TODO APP</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="inputSearch"
            value={inputSearch}
            onChange={(e) => setInputsearch(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default SearchInput;
