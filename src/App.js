function App() {
  const todos = [
    {
      value: "교육",
      checked: false,
      id: 1,
    },
  ];
  const activeTodoCount = todos.filter((todo) => !todo.checked).length;
  return (
    <>
      <section className="todoapp">
        <header>
          <h1>todos</h1>
        </header>
        {/* FIXME main과 footer는 todos가 있는 경우에만 보이게 수정 */}
        <main className="main">
          <ul className="todo-list">
            {/* FIXME checked일 때에만 li에 completed class가 보이게 수정 */}
            <li>
              <label>{/* FIXME todo value 보이게 수정 */}</label>
            </li>
          </ul>
        </main>
        <footer className="footer">
          <span className="todo-count">
            <strong>{/* FIXME activeTodoCount 보이게 수정 */}</strong> items left
          </span>
        </footer>
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by the TodoMVC Team</p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
