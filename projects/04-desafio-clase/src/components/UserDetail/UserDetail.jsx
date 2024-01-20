import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetail.css'

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtener detalles del usuario usando el ID de la URL
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error al obtener los detalles del usuario:', error));
  }, [id]);

  return (
    <div className='tarjeta'>
      <h2>Detalles del Usuario</h2>
      {user ? (
        <div className='card p-2'>
          <p className='card-header'><strong>ID del Usuario:</strong> {user.id}</p>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Nombre de Usuario:</strong> {user.username}</p>
          {/* Agregar más detalles según sea necesario */}
        </div>
      ) : (
        <p>Cargando detalles del usuario...</p>
      )}
    </div>
  );
}

export default UserDetail;
