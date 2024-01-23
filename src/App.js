import { useCallback, useState } from "react";
import Counter from "./components/Counter";
import Title from "./components/Title";
import TitleInput from "./components/TitleInput";

function App() {
  const [value, setValue] = useState("안녕하세요.");

  console.log("App rendered");

  const handleChange = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <>
      <Title style={{ color: "blue" }}>
        {value && <Counter key="counter" />}
        {!value && <Counter key="counter"/>}
      </Title>
      <TitleInput value={value} onChange={handleChange} />
    </>
  );
}
export default App;
