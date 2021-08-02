import express from 'express'

const app = express()

// get request
app.get('/' /* endpoit */, (req, res) => {
  console.log(req.url)
  res.send('<h1>Hello</h1>')
})

// redirect
app.get('/old', (req, res) => {
  res.redirect(301, '/new')
})

app.get('/new', (req, res) => {
  res.send('<h2>New</h2>')
})

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
