import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import { pedirProductos } from '../../helpers/pedirProductos'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    pedirProductos()
      .then((productosObtenidos) => {
        setProductos(productosObtenidos)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => { setLoading(false) })
  }, [])


  return (
    <>
      <h1>Lista de Productos</h1>
      <hr />

      <div className="tarjeta">
        {loading
          ? <div className='spinner'> <span className="spinner-grow spinner-grow-l" aria-hidden="true"></span></div>
          : productos.map(productos => (
            <div className='card' key={productos.id}>
              < img src={productos.photo} alt={productos.description} />
              <h2> {productos.description}</h2>
              <i>{productos.category}</i>
              <b>Precio: ${productos.price}</b>
              <div className='contador'>
                <ItemCount />
              </div>
              <p>Stock: {productos.stock} unidades</p>
            </div>
          ))}
      </div>
    </>
  )
}

export default ItemListContainer

