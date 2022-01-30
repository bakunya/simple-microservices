import { memo } from "react"
import CardPost from "./CardPost"

const Posts = ({ posts }) => {
    return posts.map(itm => (
        <div key={itm.id}>
            <CardPost item={itm} />
            <hr/>
            <br/>
            <br/>
        </div>
    ))
}

export default memo(Posts)