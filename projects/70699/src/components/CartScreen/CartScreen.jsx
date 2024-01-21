import { Link } from 'react-router-dom'
import './CartScreen.css'

const CartScreen = () => {
    return (
        <div className="container my-5">
            <>
                <h3>Carrito vacío</h3>
                <hr />
                <Link to='/' className='btn btn-success'>Volver a Comprar</Link>
            </>
        </div>
    )
}

export default CartScreen