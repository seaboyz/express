import express from 'express'

const app = express()

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  // hanle root
})

app.get('/things/cars', (req, res) => {})

app.post('/things/cars', (req, res) => {})

app.get('/things/cars/:carId', (req, res) => {})

app.post('/things/cars/:carId', (req, res) => {})

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
