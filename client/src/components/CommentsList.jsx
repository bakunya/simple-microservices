import { memo } from "react"

const CommentsList = ({ comments }) => {
    return (
        <ul>
            {
                comments.map(itm => (
                    <ul key={itm.id}>
                        {
                            itm.status === 'pending' 
                                ? 'comment is pending' 
                                : itm.status === 'rejected' 
                                    ? 'comment has been rejected' 
                                    : itm.content
                        }
                    </ul>
                ))
            }
        </ul>
    )
}

export default memo(CommentsList)