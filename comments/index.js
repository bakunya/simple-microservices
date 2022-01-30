const express = require('express')
const { randomBytes } = require('crypto')
const cors = require('cors')
const app = express()
const axios = require('axios')
const { network_events } = require('./config')

const commentsByPostsId = {}

app.use(express.json())
app.use(cors())

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostsId[req.params.id] ?? [])
})

app.post('/posts/:id/comments', async (req, res) => {
    const commentId = randomBytes(4).toString('hex')
    const { content } = req.body

    const comments = commentsByPostsId[req.params.id] ?? []

    comments.push({ 
        id: commentId, 
        content,
        status: 'pending'
    })

    commentsByPostsId[req.params.id] = comments

    try {
        await axios.post(`http://${network_events}:4005/events`, {
            type: 'CommentCreated',
            data: {
                id: commentId,
                content,
                postId: req.params.id,
                status: 'pending'
            }
        })
    } catch(er) { console.log(er) }

    res.status(201).send(comments)
})

app.post('/events', async (req, res) => {
    const { type, data } = req.body

    if(type === 'CommentModerated') {
        const { postId, id, status, content } = data

        const comments = commentsByPostsId[postId]
        const comment = comments.find(comment => comment.id === id)

        comment.status = status

        try {
            
            await axios.post(`http://${network_events}:4005/events`, { 
                type: 'CommentUpdated',
                data: {
                    id,
                    status,
                    postId, 
                    content
                }
             })

        } catch(er) { console.log(er) }
    }

    res.send({  })
})

app.listen(4001, () => console.log('comments running at port 4001'))