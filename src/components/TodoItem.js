function TodoItem({ todo }) {
  return (
    <li className={todo.checked ? "completed" : ""}>
      <label>{todo.value}</label>
    </li>
  );
}
export default TodoItem;
