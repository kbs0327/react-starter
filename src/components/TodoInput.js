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
      // FIXME setTodos 를 이용하여 가장 마지막에 todo 추가
      setValue("");
    }
  };

  return (
    // FIXME change 이벤트 발생시 handleChange 호출
    // FIXME keyUp 이벤트 발생시 handleKeyUp 호출
    <input
      className="new-todo"
      id="todo-input"
      type="text"
      placeholder="What needs to be done?"
      value={value}
      autoFocus
    />
  );
}

export default TodoInput;
