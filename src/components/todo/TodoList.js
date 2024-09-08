import { useDispatch, useSelector } from "react-redux";
import { deleteList, updateList } from "../../slices/TodoSlice";
import { useState } from "react";

function TodoList() {
  const inputList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState("");

  const deleteItem = (id) => {
    dispatch(deleteList(id));
  };

  const updateItem = (id, data) => {
    dispatch(updateList({ id, data }));
    setEditId(null);
  };

  return (
    <div>
      {inputList &&
        inputList.map((item) => (
          <div key={item.id}>
            {editId === item.id ? (
              <div>
                <input
                  type="text"
                  name="editData"
                  value={editData}
                  onChange={(e) => setEditData(e.target.value)}
                />
                <button onClick={() => updateItem(item.id, editData)}>
                  save
                </button>
              </div>
            ) : (
              <div>
                <h1>{item.data}</h1>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                <button
                  onClick={() => setEditId(item.id) || setEditData(item.data)}
                >
                  Update
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default TodoList;
