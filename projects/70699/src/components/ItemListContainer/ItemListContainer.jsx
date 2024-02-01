import { useEffect, useState, useContext } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { pedirProductos } from '../../helpers/pedirProductos'
import { useParams } from 'react-router-dom'
import { DarkModeContext } from '../context/DarkModeProvider';

const ItemListContainer = () => {
   const {isDarkMode, toggleDarkMode} = useContext(DarkModeContext)

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  const style = {
    background: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#333'
  }

  useEffect(() => {
    setLoading(true)
    pedirProductos()
      .then((res) => {
        if(categoryId){
          setProductos(res.filter(prod => prod.category === categoryId))
        } else {
          setProductos(res)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => { setLoading(false) })
  }, [categoryId])


  return (
    <>
      <div className="tarjeta" style={style}>
        <p>Modo oscuro: {isDarkMode ? 'Activado' : 'Desactivado'}</p>
        <button onClick={toggleDarkMode}>Switch</button>
        {loading
          ? <div className='spinner'> <span className="spinner-grow spinner-grow-l" aria-hidden="true"></span></div>
          : <ItemList productos={productos}/>}
      </div>
    </>
  )
}

export default ItemListContainer

