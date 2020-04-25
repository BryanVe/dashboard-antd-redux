const express = require('express')
const users = require('./users')
const shipments = require('./shipments')

const router = express.Router()

router.use('/users', users)
router.use('/shipments', shipments)

module.exports = router