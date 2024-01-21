function Footer({ todos, setTodos }) {
  const activeTodoCount = todos.filter((todo) => !todo.checked).length;

  const handleClickButton = () => {
    // FIXME setTodos를 이용하여 checked 된 목록 제거
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodoCount}</strong> items left
      </span>
      {/* FIXME activeTodoCount가 있는 경우에만 보임 */}
      {/* FIXME click 시에 handleClickButton 호출 */}
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
export default Footer
