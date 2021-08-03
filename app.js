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

// PUT
app.put('/api/channel/:id', (req, res) => {
  // repalce a channel based on id
  // respond with 200 or 204
  // 202 if the operation is async and still pending
  // baseically an UPDATE nuy we could aslo do an INVERT if the id is avrailable
  // or we chould choose to create a new id and do an INSERT if the id does not exist
  let id = parseInt(req.params.id)
  let name = req.body.name
  let last_update = Date.now()
  let idx = data.channels.findIndex((_) => _.id === id)
  data.channels[idx].name = name
  data.channels[idx].last_update = last_update
  res.status(200).json(data.channels[idx])
  console.log('PUT', data.channels)
})

// PATCH
// for partial update
app.patch('/api/channel/:id', (req, res) => {
  //edit a channel
  // respond with 200 or 204
  // 202 if the operation is async and still pending
  let id = req.params.id
  let name = req.body.name
  let last_update = Date.now()
  let idx = data.channels.findIndex((item) => item.id == id)
  data.channels[idx].name = name
  res.status(200).json(data.channels[idx])
  console.log('PATCH', data.channels)
})

// DELETE
app.delete('/api/channel/:id', (req, res) => {
  // delete a channel
  // respond with 200 or 204
  // 202 if the operation is async and still pending
  let id = parseInt(req.params.id)

  data.channels = data.channels.filter((_) => _.id !== id)
  res.status(204).end()
  console.log('DELETE', data.channels)
})

// HEAD
app.head('/api/channel', (req, res) => {
  //return same headers as get. no content. to check that endpoint is functional
  res.status(200).end()
})

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
