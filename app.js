import express from 'express'

import things from './routes/things.js'

const app = express()

app.use('/things', things)
app.use(express.json())

app.get('/', (req, res) => {
  // hanle root
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
app.listen(3000, (err) => {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log('listening on port 3000')
})
