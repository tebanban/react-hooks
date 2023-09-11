import { useState } from 'react'
import { List} from "./list"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const initialUsers= [
    {id:1, name:"Luis"},
    {id:2, name:"Marcos"},
    {id:3, name:"Carlos"}
  ]

  const [users, setUsers] = useState(initialUsers)
  console.log(initialUsers)

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <div><List  users= {users} /></div>
        <button onClick={() => setCount((count) => count + 1)}>
          count + 
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count - 
        </button>
        
      </div>
    </>
  )
}

export default App
