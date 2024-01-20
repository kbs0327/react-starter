import { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [items, setItems] = useState([
    { visible: true, name: "가나다", id: 1 },
    { visible: false, name: "라마바", id: 2 },
  ]);

  useEffect(() => {
    setItems((items) => [...items, { visible: true, name: "아자차", id: 3 }]);
  }, []);

  return <List items={items} />;
}
export default App;
