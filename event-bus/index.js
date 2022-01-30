const express = require('express')
const axios = require('axios')
const { network_comments, network_moderations, network_posts, network_query } = require('./config')
const app = express()

const events = []

app.use(express.json())

app.post('/events', (req, res) => {
    const event = req.body

    events.push(event)

    axios.post(`http://${network_posts}:4000/events`, event).catch(er => console.log(er.message))
    axios.post(`http://${network_comments}:4001/events`, event).catch(er => console.log(er.message))
    axios.post(`http://${network_query}:4002/events`, event).catch(er => console.log(er.message))
    axios.post(`http://${network_moderations}:4003/events`, event).catch(er => console.log(er.message))

    res.send({ status: 'OK' })
})


app.get('/events', (req, res) => {
    res.send(events)
})


app.listen(4005, () => console.log('event bus listening at port 4005'))