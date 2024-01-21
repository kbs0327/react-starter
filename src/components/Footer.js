function Footer({ todos, setTodos, dispatch }) {
  const activeTodoCount = todos.filter((todo) => !todo.checked).length;

  const handleClickButton = () => {
    // FIXME setTodos를 dispatch를 사용하게 변경
    setTodos(todos => todos.filter(todo => !todo.checked));
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodoCount}</strong> items left
      </span>
      {todos.length > activeTodoCount && (
        <button className="clear-completed" onClick={handleClickButton}>Clear completed</button>
      )}
    </footer>
  );
}
export default Footer
