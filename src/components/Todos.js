import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoapp/reducers/operations";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operations.items);
  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        <input type="checkbox" checked={todo.completed}></input>
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
        <span>
          <Icon icon={edit2} />
        </span>
        <span>
          <Icon onClick={() => dispatch(removeTodo(todo.id))} icon={trash} />
        </span>
      </div>
    </div>
  ));
}

export default Todos;
