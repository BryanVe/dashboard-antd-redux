const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const verifyToken = require('../../functions/verifyToken')
const User = require('../../models/User')

const secretKey = process.env.SECRET || 'access_token'

router.post('/register', async (req, res) => {
  const { username, email, password, phone, country, country_code } = await req.body
  const user = new User({
    username,
    email,
    password,
    phone,
    country,
    country_code
  })
  user.password = await user.encodePassword(user.password)
  await user.save()

  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: 60*60*24
  })

  res.json({ token, message: 'Usuario registrado correctamente' })
})

router.post('/login', async (req, res) => {
  const { username, password } = await req.body
  const user = await User.findOne({ username })
  if(!user) return res.status(404).send("Username doesn't exist")

  const isValid = await user.validatePassword(password)
  if(!isValid) return res.status(401).json( { token: null })

  const token = jwt.sign({ id: user._id }, secretKey, {
    expiresIn: 60*60*24
  })
  const { password: passwordUser, ...userInfo } = user._doc
  res.json({ token, userInfo })
})

router.get('/whoami', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId, { password: 0 })
  if(!user) return res.sendStatus(404).send('User not found')
  res.json(user)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router