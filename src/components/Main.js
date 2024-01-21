import TodoList from "./TodoList";

function Main(props) {
  return (
    <main className="main">
      <TodoList {...props} />
    </main>
  );
}
export default Main
