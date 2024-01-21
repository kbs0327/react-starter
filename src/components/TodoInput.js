import { useState } from "react";

let id = 3;

function TodoInput({ setTodos }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyUp = (event) => {
    const value = event.target.value;
    if (event.which === 13 && value) {
      const todo = {
        value: event.target.value,
        checked: false,
        id: id++,
      };
      setTodos((todos) => [...todos, todo]);
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
