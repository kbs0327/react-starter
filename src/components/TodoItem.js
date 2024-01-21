function TodoItem({ todo, setTodos }) {
  const handleChangeCheck = (event) => {
    const checked = event.target.checked;
    // FIXME setTodos를 이용하여 checked 반영
  };

  const handleButtonClick = () => {
    // FIXME setTodos를 이용하여 현재 todo 제거
  };
  return (
    <li className={todo.checked ? "completed" : ""}>
      <div className="view">
        {/* FIXME change 이벤트 발생시 handleChangeCheck 호출 */}
        <input
          className="toggle"
          type="checkbox"
          checked={todo.checked}
        />
        <label>{todo.value}</label>
        {/* FIXME click 이벤트 발생시 handleButtonClick 호출 */}
        <button className="destroy"></button>
      </div>
    </li>
  );
}
export default TodoItem;
