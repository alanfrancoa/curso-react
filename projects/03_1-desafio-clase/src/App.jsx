import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((r) => r.json())
      .then(usersData => {
        setUsers(usersData)
        console.log(usersData)
      })
      .catch(error => console.error(error));
  }, [])


  return (
    <div>
      <h2>Listado de usuarios:</h2>
    </div>
  )
}

export default App
