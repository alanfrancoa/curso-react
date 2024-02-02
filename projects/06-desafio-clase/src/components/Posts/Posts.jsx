import {useEffect} from 'react'
import useJHP from '../../hooks/useJHP'
import './Posts.css'

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
                <div key={item.id} className='card'>
                    <div className='head'>
                    <h4>Title: {item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h4>
                    <span>User ID: {item.userId}</span>
                    </div>
                    <div className='body'>
                        <p>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Posts