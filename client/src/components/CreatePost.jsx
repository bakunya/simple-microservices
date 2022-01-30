import axios from "axios"
import { memo, useCallback, useState } from "react"

const CreatePost = ({ getPosts }) => {
    const [title, setTitle] = useState('')

    const handleChange = useCallback((e) => setTitle(e.target.value), [setTitle])

    const handleSubmit = useCallback((e) => {

        e.preventDefault()
        axios
            .post('http://localhost:4000/posts', { title })
            .then(() => {
                setTitle('')
                getPosts()
            })
            .catch(er => console.log(er))

    }, [title, setTitle, getPosts])

    return (
        <>
            <h1>Create Posts</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" onChange={handleChange} value={title} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default memo(CreatePost)