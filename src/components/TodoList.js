import {useContext, useEffect, useState} from 'react';
import TodoContext from "../TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  // FIXME hooks/useHash 커스텀 훅으로 분리
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const listener = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", listener);

    return () => {
      window.removeEventListener("hashchange", listener);
    };
  }, []);
  const existHash = hash === "#/active" || hash === "#/completed";
  const filteredTodos = existHash
    ? todos.filter((todo) => todo.checked === (hash === "#/active"))
    : todos;
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
export default TodoList;
