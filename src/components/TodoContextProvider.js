import { useMemo, useReducer } from "react";
import TodoContext from "../TodoContext";

function TodoContextProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, [
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
  ]);

  const value = useMemo(
    () => ({
      todos,
      dispatch,
    }),
    [todos]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;

let index = 4;

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
    case "clearCompleted":
      return todos.filter((todo) => !todo.checked);
    default:
      return todos;
  }
}
