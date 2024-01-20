import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useContext } from "react";
import TodoContext from "../TodoContext";

function TodoApp() {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <section className="todoapp">
      <Header />
      {todos.length > 0 && (
        <>
          <Main />
          <Footer />
        </>
      )}
    </section>
  );
}

export default TodoApp;
