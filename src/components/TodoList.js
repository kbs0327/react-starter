import TodoItem from "./TodoItem";

function TodoList({ todos, dispatch }) {
  // FIXME TodoContext 사용하게 변경
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
export default TodoList
