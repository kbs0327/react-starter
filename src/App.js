import TodoApp from "./components/TodoApp";
import TodoContextProvider from "./components/TodoContextProvider";

function App() {
  return (
    <>
      <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider>
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
