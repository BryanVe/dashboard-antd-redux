const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization
  console.log(token)
  if(!token) return res.status(401).json({ auth: false, message: 'No token' })
  const decoded = jwt.verify(token, process.env.SECRET)
  req.userId = decoded.id
  next()
}

module.exports = verifyToken
