import { useState } from "react";

function TodoInput({ dispatch }) {
  // FIXME TodoContext 사용하게 변경
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyUp = (event) => {
    const value = event.target.value;
    if (event.which === 13 && value) {
      dispatch({
        type: "add",
        value,
      });
      setValue("");
    }
  };

  return (
    <input
      className="new-todo"
      id="todo-input"
      type="text"
      placeholder="What needs to be done?"
      value={value}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      autoFocus
    />
  );
}

export default TodoInput;
