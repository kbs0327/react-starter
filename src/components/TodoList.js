import {useContext, useDeferredValue} from 'react';
import FilterContext from '../FilterContext';
import useHash from '../hooks/useHash';
import TodoContext from '../TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  const {filter} = useContext(FilterContext);
  const deferredFilter = useDeferredValue(filter);
  const hash = useHash();

  const existHash = hash === "#/active" || hash === "#/completed";
  const filteredTodos = existHash
    ? todos.filter((todo) => todo.checked === (hash === "#/active") && (!deferredFilter || todo.value.includes(deferredFilter)))
    : todos.filter((todo) => (!deferredFilter || todo.value.includes(deferredFilter)));
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
