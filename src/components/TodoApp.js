import {useState} from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function TodoApp() {
  const [todos, setTodos] = useState([
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
      <Header setTodos={setTodos}/>
      {todos.length > 0 && (
        <>
          <Main todos={todos} setTodos={setTodos}/>
          <Footer todos={todos} setTodos={setTodos}/>
        </>
      )}
    </section>
  );
}
export default TodoApp;
