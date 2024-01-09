
const ItemListComponent = ({losSimpsons}) => {

  return (
    <div>
        {
            losSimpsons && losSimpsons.map(({id,nombre, description}, index) => (// primero todo el objeto desestruturado y el indice luego.
                <div key={index}> 
                    <p>ID: {id}</p>
                    <p>Nombre: {nombre}</p>
                    <p>Descripcion: {description}</p>
                    <hr />
                </div>
            ))
        }
    </div>
  )
}

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