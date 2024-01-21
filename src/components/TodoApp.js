import {useState} from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function TodoApp() {
  // FIXME reducer 함수를 사용하는 useReducer 생성
  const [todos, dispatch] = useState([
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
      // FIXME implement
    case "delete":
      // FIXME implement
    case "update":
      // FIXME implement
    case "clearCompleted":
      // FIXME implement
    default:
      return todos;
  }
}
