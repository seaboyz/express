import express from 'express'

// http constants
// import http from 'http'
// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

const app = express()

// Routes
app.get('/', (req, res) => {
  console.log(req.headers)
  console.log(req.url)
  console.log(req.ip)
  console.log(req.hostname)
  console.log(req.method)
  console.log(req.protocol)
  console.log(req.path)
  console.log(req.subdomains)
  console.log(req.params) //app.get('user/:id')
  console.log(req.query)
  res.status(404).end()
})

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
