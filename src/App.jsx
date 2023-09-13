import { useEffect, useState } from "react";
import { List } from "./list";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    console.log("App render");
  }, []);

  const initialUsers = [
    { id: 1, name: "Luis" },
    { id: 2, name: "Marcos" },
    { id: 3, name: "Carlos" },
  ];

  const [users, setUsers] = useState(initialUsers);
  console.log(initialUsers);

  const addUser = () => {
    const newUser = { id: Date.now(), name: inputText };
    setUsers([...users, newUser]);
  };

  return (
    <>
      <div className="card">
        <div>
          <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
          <button onClick={addUser}>Add user</button>
          <h3>List Users</h3>
          <List users={users} />
        </div>
        <button onClick={() => setCount((count) => count + 1)}>count +</button>
        <button onClick={() => setCount((count) => count - 1)}>count -</button>
        <h1>{count}</h1>
      </div>
    </>
  );
}

export default App;
