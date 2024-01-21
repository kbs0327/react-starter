import TodoList from "./TodoList";

function Main({ todos }) {
  return (
    <main className="main">
      <TodoList todos={todos} />
    </main>
  );
}
export default Main
