import { useState, createContext, useEffect } from "react"
import Swal from 'sweetalert2'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(init)

    useEffect(()=> {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const addToCart = (item) => {
        setCarrito([... carrito, item])
    }
    console.log(carrito)

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }
    const precioTotal = () => {
        return carrito.reduce((acc, prod) => {
            if(prod.price !== undefined && prod.counter !== undefined && typeof prod.price === 'number' && typeof prod.counter === 'number'){
                return acc + prod.price * prod.counter;
            }
        }, 0) 
    }

    const removeItem = (itemId) => {
        const newItem = carrito.filter((prod)=> prod.id !== itemId)
        setCarrito(newItem)
        Swal.fire({
            title: "Estas seguro?",
            text: "Esto no puede revertirse!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar el producto del carrito!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Eliminado!",
                text: "El producto se ha eliminado de tu compra.",
                icon: "success"
              });
            }
          });

    }
    return (
        <CartContext.Provider value={{
            precioTotal,
            removeItem,
            carrito,
            addToCart,
            calcularCantidad

        }}>
            {children}
        </CartContext.Provider>
    )
}