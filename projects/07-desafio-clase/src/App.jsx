import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from './redux/arraySlice';
import { useState } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const productos = useSelector(state => state.array.products);
  const [ID, setID] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [error, setError] = useState('')

  const handleIDChange = (event) => {
    setID(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const agregarProductoHandler = (event) => {
    event.preventDefault();
  
    // Valida que todos los campos estén completos
    if (!ID || !description || !price || !stock) {
      setError('Por favor complete todos los campos.');
      return;
    }
  
    // Verifica si el ID ya existe en la lista de productos
    const idExists = productos.some(producto => producto.ID === parseInt(ID));
    if (idExists) {
      setError('El ID ingresado ya existe en la lista de productos.');
      return;
    }
  
    // Agrega el producto si pasa todas las validaciones
    const producto = {
      ID: parseInt(ID),
      description,
      price: parseFloat(price),
      stock: parseInt(stock),
    };
  
    dispatch(addProducts(producto));
    
    // Reinicia los estados después de agregar el producto
    setID('');
    setDescription('');
    setPrice('');
    setStock('');
    setError('');
  };

  return (
    <div>
      <form onSubmit={agregarProductoHandler}>
        <input type="number" placeholder='Ingrese ID' id="ID" name="ID" value={ID} onChange={handleIDChange} />
        <input type="text" placeholder='Ingrese descripción' value={description} onChange={handleDescriptionChange}/>
        <input type="number" placeholder='Ingrese precio' value={price} onChange={handlePriceChange}/>
        <input type="number" placeholder='Ingrese stock' value={stock} onChange={handleStockChange}/>
        <button type='submit'>Agregar producto</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Lista de productos: </h2>
      <hr />
      <ul>
        {productos && productos.map((producto, index) => (
          <li key={index}>Producto: {producto.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;