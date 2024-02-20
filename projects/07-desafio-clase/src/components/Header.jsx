import { useSelector } from "react-redux";

export function Header() {
  const products = useSelector((state) => state.products);

  return (
    <header>
      <ul>
        <li>ID: {products.ID}</li>
        <li>Descripción: {products.description}</li>
        <li>Stock: {products.stock}</li>
        <li>Precio: {products.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</li>
      </ul>
    </header>
  );
}