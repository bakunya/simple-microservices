import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'

function App() {
  const [posts, setPosts] = useState([])

  const getPosts = useCallback(() => {

    axios
      .get('http://localhost:4002/posts')
      .then(res => setPosts(Object.values(res.data)))
      .catch(er => console.log(er))

  }, [setPosts])

  useEffect(() => {

    getPosts()

  }, [getPosts])

  return (
    <div className="App">
      Neko's Blog
      <CreatePost getPosts={getPosts} />
      <br/>
      <hr />
      <br/>
      <br/>
      <br/>
      <Posts posts={posts} />
    </div>
  )
}

export default App
