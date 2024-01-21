import {useReducer} from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      value: "교육",
      checked: false,
      id: 1,
    },
    {
      value: "업무",
      checked: true,
      id: 2,
    },
    {
      value: "티타임",
      checked: false,
      id: 3,
    },
  ]);

  return (
    <section className="todoapp">
      <Header dispatch={dispatch}/>
      {todos.length > 0 && (
        <>
          <Main todos={todos} dispatch={dispatch}/>
          <Footer todos={todos} dispatch={dispatch}/>
        </>
      )}
    </section>
  );
}
export default TodoApp;

let index = 4;

function reducer(todos, action) {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        {
          value: action.value,
          checked: false,
          id: index++,
        },
      ];
    case "delete":
      return todos.filter((todo) => todo.id !== action.id);
    case "update":
      return todos.map((todo) =>
        todo.id === action.todo.id ? { ...todo, ...action.todo } : todo
      );
    case "clearCompleted":
      return todos.filter((todo) => !todo.checked);
    default:
      return todos;
  }
}
