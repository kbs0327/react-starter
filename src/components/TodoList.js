import {useContext} from 'react';
import FilterContext from '../FilterContext';
import TodoContext from '../TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  const {filter} = useContext(FilterContext);

  const hasFilter = filter === "active" || filter === "completed";
  const filteredTodos = hasFilter
    ? todos.filter((todo) => todo.checked === (filter === "active"))
    : todos;
  if (!hasFilter) {
    tooSlowFunction();
  }
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}

function tooSlowFunction() {
  let value = 1000000000;
  while (value--);
}

export default TodoList;
