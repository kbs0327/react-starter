import {useRef} from 'react';
import TodoInput from "./TodoInput";

function Header() {
  const todoInputRef = useRef(null);

  const handleClick = () => {
    todoInputRef.current?.focus();
  }
  return (
    <header>
      <h1 onClick={handleClick}>todos</h1>
      <TodoInput ref={todoInputRef} />
    </header>
  );
}
export default Header;
