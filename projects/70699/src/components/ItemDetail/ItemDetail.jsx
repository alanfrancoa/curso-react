import React from 'react'
import './ItemDetail.css'
import { Link, useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'

const ItemDetail = ({ id, name, description, price, photo, category }) => {
    const navigate = useNavigate()

    const volverAtras = () => {
        navigate('/')
    }

    const goToCart = () => {

    }

    const addToCart = () => {
        const newItem = {
            id, 
            name,
            description,
            photo, 
            price, 
            category,
        }
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1500
          });
    }


    return (
        <div className='card'>
            <div>
                <img src={photo} alt={photo} className='card-img-top'/>
                {/*<p className='card-text'>{name}</p> */}
                <h4>{description}</h4>
                <div className='card-body text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint praesentium facilis repellendus sit aliquid, molestiae dolor quasi excepturi, accusamus exercitationem doloremque dignissimos temporibus rem deserunt vel voluptatum officia unde.</div>
                <h5>{category}</h5>
                <div className='contador'>
                    <ItemCount />
                </div>
                <div className='botones'>
                    <button className='btn btn-primary m-5' onClick={volverAtras}>
                        Volver atrás
                    </button>
                    <button className='btn btn-success m-5' onClick={addToCart}>
                        Agregar al carrito
                    </button>
                    <Link className='btn btn-info m-5' to={'/cart'}>
                        Ver carrito
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail