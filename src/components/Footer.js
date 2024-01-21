function Footer({ todos }) {
  const activeTodoCount = todos.filter((todo) => !todo.checked).length;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodoCount}</strong> items left
      </span>
    </footer>
  );
}
export default Footer
