import './PostsList.css'
import React from 'react'

const PostsList = ({ posts }) => {
    if (!posts || !Array.isArray(posts)) {
        return <div>No hay publicaciones</div>;
    }

    return (
        <div className='post-list'>
            {
                posts && posts.map(({ userId, id, title, body }, index) => (
                    <div key={index} className='item-list'>
                        <div className='title-post'>
                            <h4>{title}</h4>
                        </div>
                        <div className='info-post'>
                            <span>ID usuario: {userId}</span>
                            <span>ID post: {id}</span>
                        </div>
                        <div>
                        <p>{body}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PostsList