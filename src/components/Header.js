import TodoInput from "./TodoInput";

function Header({setTodos}) {
  return (
    <header>
      <h1>todos</h1>
      <TodoInput setTodos={setTodos}/>
    </header>
  );
}
export default Header;
