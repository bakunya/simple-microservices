import { memo, useCallback, useEffect, useState } from "react"
import axios from 'axios'
import CommentsCount from "./CommentsCount"
import CommentsList from "./CommentsList"
import CreateComment from "./CreateComment"

const CardPost = ({ item }) => {
    const [comments, setComments] = useState(item?.comments ?? [])

    const getComments = useCallback(() => {

        axios
            .get(`http://localhost:4002/posts/${item.id}/comments`)
            .then(res => {
                setComments(res.data)
                console.log(res.data)
            })
            .catch(er => console.log(er))


    }, [setComments])

    return (
        <>
            <h1>{ item.title }</h1>
            <CommentsCount count={comments?.length ?? 0} />
            <CommentsList comments={comments} />
            <CreateComment getComments={getComments} postId={item.id} />
        </>
    )
}

export default memo(CardPost)