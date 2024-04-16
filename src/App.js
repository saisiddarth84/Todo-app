import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { deleteAll } from "./redux/todoapp/reducers/operations";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operations.items);

  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO LIST</h1>
      <Form editFormVisibility={editFormVisibility}  editTodo={editTodo} cancelUpdate={cancelUpdate}/>
      <Todos
        handleEditClick={handleEditClick}
        editFormVisibility={editFormVisibility}
      />
      {todos.length > 1 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
