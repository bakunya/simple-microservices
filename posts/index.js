const express = require('express')
const { randomBytes } = require('crypto')
const axios = require('axios')
const cors = require('cors')
const app = express()

const posts = {}

app.use(express.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body
    posts[id] = { id, title }

    try {
        await axios.post('http://localhost:4005/events', { 
            type: 'PostCreated',
            data: { 
                id, title
            }
        })
    } catch(er) { console.log(er.message) }

    res.status(201).send(posts[id])
})

app.post('/events', (req, res) => {
    console.log('received event', req.body.type)

    res.send({  })
})

app.listen(4000, () => console.log('posts running at port 4000'))