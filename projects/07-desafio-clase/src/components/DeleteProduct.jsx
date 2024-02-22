import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProductById } from '../redux/arraySlice'
import { useState } from 'react'

const DeleteProduct = () => {
    const dispatch = useDispatch()
    const [IDBuscado, setIDBuscado] = useState('')

    const handleID = (event) => {
        setIDBuscado(event.target.value)
    }

    const handleDelete = (event) => {
        event.preventDefault()
        dispatch(removeProductById(parseInt(IDBuscado)))
        setIDBuscado('')
    }


  return (
    <div>
        <h3>Elimine producto por ID:</h3>
        <form onSubmit={handleDelete}>
            <input type="number" placeholder='Ingrese ID de producto' value={IDBuscado} onChange={handleID}/>
            <button type='submit'>Eliminar</button>
        </form>
    </div>
  )
}

export default DeleteProduct