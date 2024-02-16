import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const products = useSelector((state) => state.products)
    console.log(products)
    return (
        <header>
            <h1>Lista de productos:</h1>
            <ul>
                {products && products.map((producto, index) => (
                    <li key={index}>
                        <p>ID: {producto.ID}</p>
                        <p>Nombre: {producto.description}</p>
                        <p>Precio: {producto.price}</p>
                        <p>Stock: {producto.stock}</p>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header