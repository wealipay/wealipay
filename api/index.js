module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
    const { name = 'World' } = req.query
    res.send(`Hello ${name}!`)
  }