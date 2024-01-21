function App() {
  // FIXME components/TodoApp.js 로 분리
  const todos = [
    {
      value: "교육",
      checked: false,
      id: 1,
    },
    {
      value: "업무",
      checked: true,
      id: 2,
    },
    {
      value: "티타임",
      checked: false,
      id: 3,
    },
  ];

  // FIXME components/Footer.js 로 분리
  const activeTodoCount = todos.filter((todo) => !todo.checked).length;
  return (
    <>
      {/* FIXME components/TodoApp.js 로 분리 */}
      <section className="todoapp">
        {/* FIXME components/Header.js 로 분리 */}
        <header>
          <h1>todos</h1>
        </header>
        {/* FIXME components/Header.js 로 분리 */}
        {todos.length > 0 && (
          <>
            {/* FIXME components/Main.js 로 분리 */}
            <main className="main">
              {/* FIXME components/TodoList.js 로 분리 */}
              <ul className="todo-list">
                {todos.map((todo) => (
                  // {/* FIXME components/TodoItem.js 로 분리 */}
                  <li key={todo.id} className={todo.checked ? "completed" : ""}>
                    <label>{todo.value}</label>
                  </li>
                  // {/* FIXME components/TodoItem.js 로 분리 */}
                ))}
              </ul>
              {/* FIXME components/TodoList.js 로 분리 */}
            </main>
            {/* FIXME components/Main.js 로 분리 */}
            {/* FIXME components/Footer.js 로 분리 */}
            <footer className="footer">
              <span className="todo-count">
                <strong>{activeTodoCount}</strong> items left
              </span>
            </footer>
            {/* FIXME components/Footer.js 로 분리 */}
          </>
        )}
      </section>
      {/* FIXME components/TodoApp.js 로 분리 */}

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
