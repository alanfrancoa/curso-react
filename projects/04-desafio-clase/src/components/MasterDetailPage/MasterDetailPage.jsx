import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MasterDetailPage.css'

function MasterDetailPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Obtener la lista de usuarios al montar el componente
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error al obtener la lista de usuarios:', error));
  }, []);

  return (
    <div>
      <h1>Usuarios:</h1>
      <hr />
      <div className='tarjeta'>
        {users.map(user => (
          <div className='items' key={user.id}>
            {/* Enlace al detalle del usuario usando react-router-dom */}
            <Link to={`/user/${user.id}`}>
              {`ID: ${user.id}, Nombre: ${user.name}`}
            </Link>
          </div>
        ))}
      </ div>
    </div>
  );
}

export default MasterDetailPage;