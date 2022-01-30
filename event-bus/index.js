const express = require('express')
const axios = require('axios')

const app = express()

const events = []

app.use(express.json())

app.post('/events', (req, res) => {
    const event = req.body


    events.push(event)


    axios.post('http://localhost:4000/events', event).catch(er => console.log(er.message))
    axios.post('http://localhost:4001/events', event).catch(er => console.log(er.message))
    axios.post('http://localhost:4002/events', event).catch(er => console.log(er.message))
    axios.post('http://localhost:4003/events', event).catch(er => console.log(er.message))

    res.send({ status: 'OK' })
})


app.get('/events', (req, res) => {
    res.send(events)
})


app.listen(4005, () => console.log('event bus listening at port 4005'))