import { useContext } from "react";
import TodoContext from "../TodoContext";
import FilterButtons from './FilterButtons';

function Footer() {
  const { todos, dispatch } = useContext(TodoContext);

  const activeTodoCount = todos.filter((todo) => !todo.checked).length;

  const handleClickButton = () => {
    dispatch({
      type: "clearCompleted",
    });
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodoCount}</strong> items left
      </span>
      <FilterButtons />
      {todos.length > activeTodoCount && (
        <button className="clear-completed" onClick={handleClickButton}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
export default Footer
