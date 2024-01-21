function TodoItem({ todo, dispatch }) {
  const handleChangeCheck = (event) => {
    const checked = event.target.checked;
    dispatch({
      type: "update",
      todo: {
        ...todo,
        checked,
      },
    });
  };

  const handleButtonClick = () => {
    dispatch({
      type: "delete",
      id: todo.id,
    });
  };
  return (
    <li className={todo.checked ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.checked}
          onChange={handleChangeCheck}
        />
        <label>{todo.value}</label>
        <button className="destroy" onClick={handleButtonClick}></button>
      </div>
    </li>
  );
}
export default TodoItem;
