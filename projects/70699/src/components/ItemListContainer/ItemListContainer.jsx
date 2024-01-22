import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
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
      <div className="tarjeta">
        {loading
          ? <div className='spinner'> <span className="spinner-grow spinner-grow-l" aria-hidden="true"></span></div>
          : <ItemList productos={productos}/>}
      </div>
    </>
  )
}

export default ItemListContainer

