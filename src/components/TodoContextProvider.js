import { memo, useMemo, useReducer } from "react";
import TodoContext from "../TodoContext";

function TodoContextProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, []);

  const value = useMemo(
    () => ({
      todos,
      dispatch,
    }),
    [todos]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

let index = 0;

function reducer(todos, action) {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        {
          value: action.value,
          checked: false,
          id: index++,
        },
      ];
    case "delete":
      return todos.filter((todo) => todo.id !== action.id);
    case "update":
      return todos.map((todo) =>
        todo.id === action.todo.id ? { ...todo, ...action.todo } : todo
      );
    case "checkAll":
      return todos.map((todo) => ({ ...todo, checked: action.checked }));
    case "clearCompleted":
      return todos.filter((todo) => !todo.checked);
    default:
      return todos;
  }
}

export default memo(TodoContextProvider);
