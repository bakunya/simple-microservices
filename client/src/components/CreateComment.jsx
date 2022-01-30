import { memo, useCallback, useState } from "react"
import axios from 'axios'

const CreateComment = ({ getComments, postId }) => {
    const [content, setContent] = useState('')

    const handleChange = useCallback((e) => setContent(e.target.value), [setContent])

    const handleSubmit = useCallback((e) => {

        e.preventDefault()
        axios
            .post(`http://localhost:4001/posts/${postId}/comments`, { content })
            .then(() => {
                getComments()
                setContent('')
            })
            .catch(er => console.log(er))

    }, [content, postId, getComments, setContent])

    return (
        <>
            <h5>Create Comment</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="content">Content</label>
                <input type="text" name="content" id="content" onChange={handleChange} value={content} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default memo(CreateComment)