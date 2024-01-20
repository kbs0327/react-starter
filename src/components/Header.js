import { memo } from 'react';
import TodoInput from "./TodoInput";

function Header() {
  return (
    <header>
      <h1>todos</h1>
      <TodoInput/>
    </header>
  );
}

export default memo(Header);
