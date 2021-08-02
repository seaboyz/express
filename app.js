import express from 'express'

import { how, sup } from './middle.js'

const app = express()

app.use(sup)

app.get('/', (req, res) => {
  /* middleware runs here */
  res.send({ data: 'hi' })
})

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
