import {useEffect} from 'react'
import useJHP from '../../hooks/useJHP'

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
                <li key={item.id}>{item.name}</li>
            ))}
        </div>
    )
}

export default Users