import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, photo, description}) => {
    return (
        <div className='card' key={id}>
            <img src={photo} alt={photo}/>
            <h2>Descripcion: {description}</h2>
            {/*<i>Categoria</i>*/}
            <h4>{name}</h4>
            <b>Precio: ${price}</b>
            <div className='contador'>
                <Link className='btn btn-info'>Ver mas detalles</Link>
            </div>
            {/*<p>Stock: unidades</p>*/}

        </div>
    )
}

export default Item