import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../TodoContext";
import useHash from "../hooks/useHash";

function TodoList() {
  const { todos } = useContext(TodoContext);
  const hash = useHash();
  const existHash = hash === "#/active" || hash === "#/completed";
  const filteredTodos = existHash
    ? todos.filter((todo) => todo.checked === (hash === "#/active"))
    : todos;
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
