const express = require('express')
const router = express.Router()
const timeController = require('../controllers/timeController')

router.route('/')
    .get(timeController.getTime)

module.exports = router