import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function TodoApp() {
  const todos = [
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
  ];

  return (
    <section className="todoapp">
      <Header />
      {todos.length > 0 && (
        <>
          <Main todos={todos} />
          <Footer todos={todos} />
        </>
      )}
    </section>
  );
}
export default TodoApp;
