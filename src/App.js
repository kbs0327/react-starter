import { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [items, setItems] = useState([
    { visible: true, name: "가나다", id: 1 },
    { visible: false, name: "라마바", id: 2 },
  ]);

  useEffect(() => {
    // 초기 bulk 로 1번만 계산하는 것을 막기 위해 timeout 추가
    const timeoutId = window.setTimeout(() => {
      // items 값 변경
      setItems((items) => [{ visible: true, name: "아자차", id: 3 }, ...items]);
    }, 200);
    return () => {
      window.clearTimeout(timeoutId);
    }
  }, []);

  return <List items={items} />;
}
export default App;
