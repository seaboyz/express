import express from 'express'

const router = express.Router()

router
  .route('/cars')
  .get((req, res) => {
    res.send('hi get /things/cars')
  })
  .post((req, res) => {
    res.send('hi post /things/cars')
  })

router
  .route('/cars/:carid')
  .get((req, res) => {
    res.send('hi get /things/cars/' + req.params.carid)
  })
  .put((req, res) => {
    res.send('hi put /things/cars/' + req.params.carid)
  })

export default router
