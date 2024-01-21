import {forwardRef, useContext, useImperativeHandle, useRef, useState} from 'react';
import TodoContext from "../TodoContext";

function TodoInput(_, ref) {
  const { dispatch } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    }
  }), []);

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
      ref={inputRef}
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

export default forwardRef(TodoInput);
