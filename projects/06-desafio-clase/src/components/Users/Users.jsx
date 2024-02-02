import { useEffect } from 'react'
import useJHP from '../../hooks/useJHP'
import './Users.css'

const Users = () => {
    const { data, error, callApi } = useJHP('/users')

    useEffect(() => {
        callApi()
    }, [])

    return (
        <div>
            <h2>Listado de usuarios:</h2>
            <hr />
            {error && <p>{error}</p>}
            {data.map(item => (
                <div key={item.id} className='card'>
                    <div className='head'>
                        <h4>Nombre: {item.name}</h4>
                    </div>
                    <div className='body'>
                        <span>Username: {item.username}</span>
                        <span>e-mail: {item.email}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Users