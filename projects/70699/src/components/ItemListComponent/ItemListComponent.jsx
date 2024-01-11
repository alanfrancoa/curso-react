import PropTypes from 'prop-types'
import './ItemListComponent.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListComponent = ({losSimpsons}) => {

  return (
    <div className="tarjeta">
        {
            losSimpsons && losSimpsons.map(({id,nombre, description}, index) => (// primero todo el objeto desestruturado y el indice luego.
               <div className="card tarjetaDos" key={index}>
               <span>{id}</span>
               <div className="card-body ">
               <h5 className="card-title">Nombre: {nombre}</h5>
                 <p className="card-text">Descripcion: {description}</p>
                 <ItemCount />
               </div>
             </div>
            ))
        }
    </div>
  )
}

ItemListComponent.propTypes = {
    losSimpsons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
}; // Verifica que sea un array de objetos. 


/*{
            props.losSimpsons && props.losSimpsons.map((objeto, index) => (
                <div key={index}> 
                    <p>ID: {objeto.id}</p>
                    <p>Nombre: {objeto.nombre}</p>
                    <p>Descripcion: {objeto.description}</p>
                    <hr />
                </div>
            ))
        } Declarado explicitamente */
export default ItemListComponent