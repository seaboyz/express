import express from 'express'

import { data } from './data.js'

const app = express()

// apply express.json() middleware to parse json
app.use(express.json())

// GET (reading data from server)
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

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
