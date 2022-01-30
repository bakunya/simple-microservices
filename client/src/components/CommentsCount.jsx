import { memo } from "react"

const CommentsCount = ({ count }) => {
    return (
        <h3>{ count } comments</h3>
    )
}

export default memo(CommentsCount)