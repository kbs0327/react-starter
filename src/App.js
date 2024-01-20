import { useCallback, useState } from "react";
import Title from "./components/Title";
import TitleInput from "./components/TitleInput";

function App() {
  const [value, setValue] = useState('안녕하세요.');

  const handleChange = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <>
      <Title style={{ color: "blue" }}>{value}</Title>
      <TitleInput value={value} onChange={handleChange}/>
    </>
  );
}
export default App;
