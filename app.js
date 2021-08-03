'use strict'
//  https://expressjs.com/en/4x/api.html#res
const express = require('express')
const app = express()
const port = process.env.port || 3000
app.set('view engine', 'pug')
app.set('views', process.cwd() + '/views')

app.get('/', (req, res) => {
  //handle route: get requests for "/"
  // res.send("<h1>asdf</h1>") //looks at content to figure out type
  // res.end() //no type header set
  // res.json({data:123}) //set type as application/json
  // res.redirect(301, "/other");
  // res.format({
  //   "text/plain": () => {
  //     res.send("Just some words");
  //   },
  //   "text/html": () => {
  //     res.send("<h1>Here be HTML</h1>");
  //   },
  //   "application/json": () => {
  //     res.send({ message: "This is a JSON response" });
  //   },
  //   "text/xml":()=>{
  //       res.send('<?xml version="1.0">');
  //   },
  //   "default": () => {
  //     //any other types I don't have
  //     res.status(406).send("Not Acceptable");
  //   }
  // });
  // res.links({
  //   first: "http://localhost:3000/?page=1",
  //   prev: "http://localhost:3000/?page=2",
  //   next: "http://localhost:3000/?page=4",
  //   last: "http://localhost:3000/?page=9",
  //   canonical: "http://localhost:3000/page/3",
  //   prefetch: "http://localhost:3000/something.png",
  //   preload: "http://localhost:3000/something-else.png"
  // });
  // let locals = { name: "jeffrey" };
  // res.render("myview", locals, (err, html) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log(html);
  //   res.send(html);
  // });
  // res.set("Content-Type", "text/html") //set any header as the first header
  // res.append("Access-Control-Allow_Origin", "*") //set headers after the first one
  // res.cookie('name', 'Steve', { domain: '.example.com', path: '/',
  //                            secure: true, maxAge: 2592000000}) //30 days
  // res.status(404).end()
  // res.type("application/json") //sets the Content-Type header
  // res.attachment("/path/to/filename.png"); //sets Content-Disposition header
  // res.sendFile("./img/cotton-candy.gif", err => console.log);
  res.download('./img/cotton-candy.gif', 'candy.gif', (err) => {
    console.log(err)
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('listening on port', port)
})
