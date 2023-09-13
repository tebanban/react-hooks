import { useEffect, useState } from "react";
import { List } from "./list";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [query, setQuery] = useState("");

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

  const filteredUsers = users.filter((index) => {
    if (query === "") {
      return index;
    } else if (index.name.toLowerCase().includes(query.toLowerCase())) {
      return index;
    }
  });

  return (
    <>
      <div className="card">
        <div>
          <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
          <button onClick={addUser}>Add user</button>
          <h3>List Users</h3>
          <List users={users} filteredUsers={filteredUsers}/>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>count +</button>
        <button onClick={() => setCount((count) => count - 1)}>count -</button>
        <h1>{count}</h1>
        <h3>Filter Users</h3>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}></input>

      </div>
    </>
  );
}

export default App;
