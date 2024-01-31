import {useEffect} from 'react'
import useJHP from '../../hooks/useJHP'

const Posts = () => {
    const { data, error, callApi } = useJHP('/posts')

    useEffect(() => {
        callApi()
    }, [])

    return (
        <div>
            <h2>Listado de posts:</h2>
            <hr />
            {error && <p>{error}</p>}
            {data.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </div>
    )
}

export default Posts