import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from './redux/arraySlice';

const App = () => {
  const dispatch = useDispatch();
  const productos = useSelector(state => state.array.products); 

  const agregarProductoHandler = () => {
    const producto = {
      ID: 1,
      description: "toallitas",
      price: 200,
      stock: 20,
    }

    dispatch(addProducts(producto));
  };

  console.log(productos);
  
  return (
    <div>
      <button onClick={agregarProductoHandler}>Agregar producto</button>
      <ul>
        {productos && productos.map((producto, index) => (
          <li key={index}>Producto: {producto.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;