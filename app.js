import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log(req.url)
  res.send('<h1>Hello</h1>')
})

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
