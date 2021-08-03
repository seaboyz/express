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

app
  .route('things/cars')
  .get((req, res) => {})
  .post((req, res) => {})

app
  .route('things/cars/:carId')
  .get((req, res) => {})
  .post((req, res) => {})

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
