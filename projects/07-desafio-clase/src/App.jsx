import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importar también useSelector
import { addProduct } from './redux/productSlice';

function App() {
  const dispatch = useDispatch();

  // Agregar useSelector para acceder al estado Redux
  const products = useSelector(state => state.products);

  useEffect(() => {
    const data = {
      ID: 32,
      description: "Toallitas",
      stock: 20,
      price: 70.32,
    }
    dispatch(addProduct(data));

    // Imprimir el estado Redux en la consola después de despachar la acción
    console.log("Estado Redux después de agregar el producto:", products);
  }, []);

  return (
    <div>
      <h1>Desafio nro 7:</h1>
      <hr />
      <Header />
    </div>
  );
}

export default App;