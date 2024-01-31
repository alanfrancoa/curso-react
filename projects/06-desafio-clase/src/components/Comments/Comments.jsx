import {useEffect} from 'react'
import useJHP from '../../hooks/useJHP'

const Comments = () => {
    const { data, error, callApi } = useJHP('/comments')

    useEffect(() => {
        callApi()
    }, [])

    return (
        <div>
            <h2>Listado de comentarios:</h2>
            <hr />
            {error && <p>{error}</p>}
            {data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </div>
    )
}

export default Comments