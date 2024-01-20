import { memo } from "react";

import CheckAll from "./ChckAll";
import TodoList from "./TodoList";

function Main() {
  return (
    <main className="main">
      <CheckAll />
      <TodoList/>
    </main>
  );
}

export default memo(Main);
