import { useCallback } from "react";

function TitleInput({ onChange, value }) {
  const handleChange = useCallback((event) => {
    onChange(event.target.value);
  }, [onChange]);
  return <input type="text" onChange={handleChange} value={value} />;
}
export default TitleInput;
