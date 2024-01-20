import { useContext, useState } from "react";
import TodoContext from "../TodoContext";

function EditItem({ todo, onCancel }) {
  const { dispatch } = useContext(TodoContext);
  const [value, setValue] = useState(todo.value);
  const handleChange = (event) => setValue(event.target.value);

  const handleKeyUp = (event) => {
    if (event.which === 13) {
        commit();
        return;
    }

    if (event.which === 27) {
        onCancel();
    }
  };

  const commit = () => {
    if (value !== todo.value) {
      dispatch({
        type: "update",
        todo: {
          ...todo,
          value,
        },
      });
    }
    onCancel();
  };

  return (
    <input
      className="edit"
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={commit}
      onKeyUp={handleKeyUp}
      autoFocus
    />
  );
}

export default EditItem;
