import { useState, useEffect } from "react"
import './App.css'
import Card from "./assets/components/Card"

function App() {
  const [IDBuscado, setIDBuscado] = useState()
  const [user, setUser] = useState({})

  useEffect(() => {
    if (IDBuscado) {
      fetch(`https://jsonplaceholder.typicode.com/users/${IDBuscado}`)
        .then((r) => r.json())
        .then((userData) => {
          setUser(userData);
          console.log(userData);
        })
        .catch(error => console.error(error));
    } else {
      setUser({})
    }
  }, [IDBuscado])


  return (
    <div>
      <h1>Buscador de usuarios:</h1>
      <hr />
      <div className="buscador">
        <input type="text" placeholder="Ingrese ID del usuario" onInput={(e) => setIDBuscado(e.target.value)} />
        <span>{IDBuscado ? '' : 'No se ha ingresado un ID.'}</span>
      </div>
      {IDBuscado !== undefined && user.id === undefined && (
        <div>
          <h4>Usuario no encontrado</h4>
        </div>
      )}
      {user.id !== undefined && (
        <div>
          <h4>{`Datos encontrados sobre usuario-id: ${user.id}`}</h4>
          <Card user={user} />
        </div>
      )}
    </div>
  )
}

export default App
