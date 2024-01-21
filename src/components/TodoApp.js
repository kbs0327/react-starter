import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function TodoApp() {
  // FIXME useState를 사용하여 상태화
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
      {/* FIXME setTodos 전달 */}
      <Header />
      {todos.length > 0 && (
        <>
          {/* FIXME setTodos 전달 */}
          <Main todos={todos} />
          {/* FIXME setTodos 전달 */}
          <Footer todos={todos} />
        </>
      )}
    </section>
  );
}
export default TodoApp;
