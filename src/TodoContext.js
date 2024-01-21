import { createContext } from "react";

const TodoContext = createContext({
  todos: [],
  dispatch: () => {}
});

export default TodoContext;
