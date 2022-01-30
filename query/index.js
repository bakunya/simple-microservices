const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

const posts = {}

app.use(express.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send(posts)
}) 

app.get('/posts/:id/comments', (req, res) => {
    const comments = posts[req.params.id].comments ?? []

    res.send(comments)
}) 

const handleEvent = (type, data) => {
    if(type === 'PostCreated') { 
        const { id, title } = data

        posts[id] = { id, title, comments: [] }
    }

    if(type === 'CommentCreated') { 
        const { id, content, postId, status } = data

        const post = posts[postId]
        post.comments.push({ id, content, status })
    }

    if(type === 'CommentUpdated') {
        const { id, content, postId, status } = data
        const post = posts[postId]
        const comment = post.comments.find(comment => comment.id === id)

        comment.status = status
        comment.content = content
    }
}

app.post('/events', (req, res) => {
    const { type, data } = req.body

    handleEvent(type, data)    

    res.send({  })
})

app.listen(4002, async () => {
    console.log('query running at port 4002')

    try {
        const res = await axios.get('http://localhost:4005/events')

        for (const event of res.data) {
            console.log('processing event', event.type)

            handleEvent(event.type, event.data)
        }

    } catch (er) { console.log(er) }
})