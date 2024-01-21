function Footer({ todos, dispatch }) {
  // FIXME TodoContext 사용하게 변경
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
      {todos.length > activeTodoCount && (
        <button className="clear-completed" onClick={handleClickButton}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
export default Footer
