import {forwardRef, useContext, useImperativeHandle, useRef} from 'react';
import FilterContext from '../FilterContext';
import TodoContext from '../TodoContext';

function TodoInput(_, ref) {
  const { dispatch } = useContext(TodoContext);
  const {filter, setFilter} = useContext(FilterContext);
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    }
  }), []);

  const handleChange = (event) => {
    const value = event.target.value;
    setFilter(value);
  };

  const handleKeyUp = (event) => {
    const value = event.target.value;
    if (event.which === 13 && value) {
      dispatch({
        type: "add",
        value,
      });
      setFilter("");
    }
  };

  return (
    <input
      ref={inputRef}
      className="new-todo"
      id="todo-input"
      type="text"
      placeholder="What needs to be done?"
      value={filter}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      autoFocus
    />
  );
}

export default forwardRef(TodoInput);
