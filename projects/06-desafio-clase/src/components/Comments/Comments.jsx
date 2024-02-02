import {useEffect} from 'react'
import useJHP from '../../hooks/useJHP'
import './Comments.css'

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
                <div key={item.id} className='card'>
                    <div className='head'>
                    <h4>Title: {item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h4>
                    <span>e-mail: {item.email}</span>
                    </div>
                    <div className='body'>
                        <p>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comments