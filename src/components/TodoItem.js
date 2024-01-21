function TodoItem({ todo, setTodos }) {
  const handleChangeCheck = (event) => {
    const checked = event.target.checked;
    setTodos(todos => todos.map((_todo) =>
      _todo.id === todo.id ? { ..._todo, checked } : _todo
    ));
  };

  const handleButtonClick = () => {
    setTodos(todos => todos.filter(_todo => _todo.id !== todo.id));
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
