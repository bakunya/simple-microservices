const express = require('express')
const axios = require('axios')
const app = express()
const { network_events } = require('./config')

app.use(express.json())

app.post('/events', async (req, res) => {
    const { type, data } = req.body

    if(type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved'

        try {
            await axios.post(`http://${network_events}:4005/events`, {
                type: 'CommentModerated',
                data: {
                    id: data.id,
                    postId: data.postId,
                    status,
                    content: data.content
                }
            })
        } catch(er) { console.log(er.message) }

    }

    res.send({  })
})

app.listen(4003, () => console.log('moderation running at port 4003'))