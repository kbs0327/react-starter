import { useContext } from "react";
import TodoContext from "../TodoContext";

function CheckAll() {
  const { todos, dispatch } = useContext(TodoContext);

  const isAllChecked = todos.every((todo) => todo.checked);

  const handleChange = (event) => {
    dispatch({
      type: "checkAll",
      checked: event.target.checked,
    });
  };
  return (
    todos.length > 0 && (
      <div className="toggle-all-continer">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          value={isAllChecked}
          onChange={handleChange}
        />
        <label className="toggle-all-label" htmlFor="toggle-all">
          "Mark all as complete"
        </label>
      </div>
    )
  );
}

export default CheckAll;
