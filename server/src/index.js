require('dotenv').config()
require('./database')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const routes = require('./routes')
const router = express.Router()
const PORT = process.env.PORT || 4000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
  next()
})

app.use('/', routes)


app.use('/', (req, res) => {
  res.json({ status: 'express is running' })
})

app.listen(PORT, () => {
  console.log('server running at port', PORT)
})

module.exports = router