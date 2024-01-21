import {useContext} from 'react';
import FilterContext from '../FilterContext';
import useHash from '../hooks/useHash';
import TodoContext from '../TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  const {filter} = useContext(FilterContext);
  // FIXME useDeferredValue 사용하여 필터 최적화되게 수정
  const hash = useHash();

  const existHash = hash === "#/active" || hash === "#/completed";
  const filteredTodos = existHash
    ? todos.filter((todo) => todo.checked === (hash === "#/active") && (!filter || todo.value.includes(filter)))
    : todos.filter((todo) => (!filter || todo.value.includes(filter)));
  tooSlowFunction();
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}

function tooSlowFunction() {
  let value = 300000000;
  while (value--);
}
export default TodoList;
