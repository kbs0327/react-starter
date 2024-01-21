function App() {
  const todos = [
    {
      value: "교육",
      checked: false,
      id: 1,
    },
    {
      value: '업무',
      checked: true,
      id: 2
    },
    {
      value: '티타임',
      checked: false,
      id: 3
    }
  ];
  const activeTodoCount = todos.filter((todo) => !todo.checked).length;
  return (
    <>
      <section className="todoapp">
        <header>
          <h1>todos</h1>
        </header>
        {todos.length > 0 && (
          <>
            <main className="main">
              <ul className="todo-list">
                {/* FIXME todos의 모든 목록을 보여주게 변경 */}
                <li className={todos[0].checked ? 'completed' : ''}>
                  <label>{todos[0].value}</label>
                </li>
              </ul>
            </main>
            <footer className="footer">
              <span className="todo-count">
                <strong>{activeTodoCount}</strong> items left
              </span>
            </footer>
          </>
        )}
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
