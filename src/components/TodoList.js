import { useContext } from "react";
import TodoContext from "../TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
export default TodoList;
