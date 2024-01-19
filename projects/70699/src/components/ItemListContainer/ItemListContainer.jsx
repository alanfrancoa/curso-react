
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
//import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const stock = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Pantalon',
      photo: 'https://picsum.photos/seed/picsum/200/300',
      price: 25000,
      category: 'ropa',
      stock: 20,
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Computadora',
      photo: 'https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I',
      price: 1500000,
      category: 'tecnologia',
      stock: 20,
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Taza',
      photo: 'https://fastly.picsum.photos/id/113/4168/2464.jpg?hmac=p1FqJDS9KHL70UWqUjlYPhJKBdiNOI_CIH0Qo-74_fU',
      price: 7500,
      category: 'bazar',
      stock: 20,
    },
    {
      id: 3,
      name: 'Producto 4',
      description: 'Guitarra',
      photo: 'https://fastly.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4',
      price: 1000000,
      category: 'musica',
      stock: 20,
    },
  ]

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      //Establecemos una demora de carga de 1s
      setTimeout(() => {
        resolve(stock)
        reject("Rechazado")

      }, 1000)
    })
  }

  useEffect(() => {
    pedirProductos()
      .then((productosObtenidos) => {
        setProductos(productosObtenidos)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <div className="container tarjeta">
      <div>
        <h1>Lista de Productos</h1>
        <hr />
        {productos.map(productos => (
          <div key={productos.id}>
            < img src={productos.photo} alt={productos.description} />
            <h2>Nombre: {productos.name}</h2>
            <p>Descripcion: {productos.description}</p>
            <p>Precio: ${productos.price}</p>
            <p>Stock: {productos.stock} unidades</p>
          </div>
        ))}
      </div>
    </div>
  )
}


export default ItemListContainer

