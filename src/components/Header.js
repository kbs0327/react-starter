import TodoInput from "./TodoInput";

function Header() {
  return (
    <header>
      {/* FIXME todos를 클릭하면 input이 focus 되게 수정 */}
      <h1>todos</h1>
      <TodoInput />
    </header>
  );
}
export default Header;
