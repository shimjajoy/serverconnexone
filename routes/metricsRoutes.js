const express = require('express')
const router = express.Router()
const metricsController = require('../controllers/metricsController')

router.route('/')
    .get(metricsController.getallDefaultmetrics)

module.exports = router