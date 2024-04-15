import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoapp/reducers/operations";
import { handleCheckbox } from "../redux/todoapp/reducers/operations";

function Todos({ handleEditClick, editFormVisibility }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operations.items);
  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        {editFormVisibility === false && (
          <input type="checkbox" checked={todo.completed} onChange={() => {
            dispatch(handleCheckbox(todo.id))
          }}></input>
        )}
        <div
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </div>
      </div>
      <div className="actions-box">
        {editFormVisibility === false && (
          <>
            <span>
              <Icon onClick={() => handleEditClick(todo)} icon={edit2} />
            </span>
            <span>
              <Icon
                onClick={() => dispatch(removeTodo(todo.id))}
                icon={trash}
              />
            </span>
          </>
        )}
      </div>
    </div>
  ));
}

export default Todos;
