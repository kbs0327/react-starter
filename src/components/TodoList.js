import {useContext} from 'react';
import useHash from '../hooks/useHash';
import TodoContext from '../TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  const hash = useHash();

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
