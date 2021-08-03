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

/**
 * "/abc" - handles /abc
 * "/ab?cd" - handles /acd or /abcd
 * "/ab+cd" - handles /abcd, /abbbcd, /abbbbbbbcd, etc
 * "/ab*cd" - "/ab" + anything + "cd"
 * /a/ - RegExp: anything that contains "a"
 * /.*man$/ - RegExp: anything that ends with "man"
 * ^ - starts with
 */
