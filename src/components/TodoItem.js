import { useContext, useState } from "react";
import TodoContext from "../TodoContext";
import EditItem from "./EditItem";

function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const [editing, setEditing] = useState(false);

  const handelChangeCheck = (event) => {
    dispatch({
      type: "update",
      todo: {
        ...todo,
        checked: event.target.checked,
      },
    });
  };

  const handleButtonClick = () => {
    dispatch({
      type: "delete",
      id: todo.id,
    });
  };

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  }

  return editing ? (
    <li className={`editing${todo.checked ? " completed" : ""}`}>
      <EditItem todo={todo} onCancel={handleCancel} />
    </li>
  ) : (
    <li className={todo.checked ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.checked}
          onChange={handelChangeCheck}
        />
        <label onDoubleClick={handleDoubleClick}>{todo.value}</label>
        <button className="destroy" onClick={handleButtonClick}></button>
      </div>
    </li>
  );
}

export default TodoItem;
