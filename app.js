import express from 'express'

const app = express()

let options = {
  dotfiles: 'ignore', //allow, deny, ignore
  etag: true,
  extensions: ['htm', 'html'],
  index: false, //to disable directory indexing
  maxAge: '7d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    //add this header to all static responses
    res.set('x-timestamp', Date.now())
  },
}
// apply express.static middleware
// http://expressjs.com/en/4x/api.html#express.static
app.use(express.static('public', options))

app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
