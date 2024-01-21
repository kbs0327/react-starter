import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import TodoContext from "../TodoContext";

function TodoApp() {
  const { todos } = useContext(TodoContext);

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
