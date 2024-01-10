import { useState, useEffect } from 'react'
import './App.css'
import PostsList from './components/PostsList/PostsList'

function App() {
  const [posts, setPosts] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r)=> r.json())
      .then(postsData => {
        setPosts(postsData)
        console.log(postsData)
      })
      .catch(error => console.error(error))
  
    
  }, [])
  

  return (
    <div>
      <h1>Listado de posts:</h1>
      <hr />
      <PostsList posts={posts}/>
    </div>
  )
}

export default App
