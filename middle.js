export const sup = (req, res, next) => {
  console.log(req.method)
  console.log('sup')
  next() /* res.send({data:'hi'}) */
}

export const how = () => {
  console.log('how you doin?')
}
