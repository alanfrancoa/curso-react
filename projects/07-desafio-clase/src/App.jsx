import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Email from './components/Email.jsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './redux/userSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((res)=> res.json())
    .then((data)=> dispatch(addUser(data)))
    .catch((err)=> console.log(err))
  }, [])
  
  
  return (
    <div>
      <h1>Desafio nro 7:</h1>
      <hr />
      <Header />
      <Email />
    </div>
  )
}

export default App
