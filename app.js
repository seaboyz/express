import express from 'express'

import { data } from './data.js'

const app = express()

// apply express.json() middleware to parse json
app.use(express.json())

/* *****GET (reading data from server)***** */
// input a url or a fetch or axios from frontend
// /api/channel
app.get('/api/channel', (req, res) => {
  // return the list of channels
  // respond with a 200
  res.json(data)
  console.log('GET', data.channels)
})

// /api/channel/:id
app.get('/api/channel/:id', (req, res) => {
  // return  a specific channel
  // respond with a 200
  const id = req.params.id

  const channel = data.channels.find((channel) => channel.id == id)
  res.send(channel)
})

/* *****POST (sending data to the server)***** */
// input from form or postman
// /api/channel
app.post('/api/channel/', (req, res) => {
  // add new channel then return new list
  // respond with a 201(created)
  let { name } = req.body
  let ids = data.channels.map((_) => _.id)
  let id = Math.max(...ids) + 1
  let last_update = Date.now()
  let newChannel = { id, name, last_update }
  data.channels.push(newChannel)
  res.status(201).json(newChannel)
  console.log('POST', data.channels)
})

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
