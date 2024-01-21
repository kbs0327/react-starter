import TodoInput from "./TodoInput";

function Header({dispatch}) {
  return (
    <header>
      <h1>todos</h1>
      <TodoInput dispatch={dispatch}/>
    </header>
  );
}
export default Header;
