import { Link } from 'react-router-dom'
import './CartScreen.css'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";


const CartScreen = () => {

    const { carrito, precioTotal, removeItem} = useContext(CartContext)

    return (
        <div className="container mt-3">
            {
                !carrito || carrito.length === 0
                    ? <>
                        <h3>Carrito vacío</h3>
                        <hr />
                        <Link to='/' className='btn btn-success'>Volver a Comprar</Link>
                    </>
                    : <>
                    <table className='miClase table text-center table-dark table-striped'>
                        <thead>
                            <tr>
                                <th colSpan={4}>
                                    <h3>Resumen Compra</h3>
                                </th>
                            </tr>
                            <tr>
                                <th>Descripcion</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            carrito.map((prod)=>(
                                <>
                                <tbody>
                                    <tr key={prod.id}>
                                        <td>
                                            <p>{prod.description}</p>
                                        </td>
                                        <td>
                                            <p>{prod.counter}</p>
                                        </td>
                                        <td>
                                            <p>${prod.price}</p>
                                        </td>
                                        <td>
                                            <FaRegTrashCan onClick={() => removeItem(prod.id)}/>
                                        </td>

                                    </tr>
                                </tbody>
                                </>
                            ))
                        }
                        <tr className='text-center'>
                            <td>
                                <p>Precio total: </p>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                                <p>${precioTotal()}</p>
                            </td>
                        </tr>
                    </table>
                    </>
            }
           
        </div>
    )
}

export default CartScreen