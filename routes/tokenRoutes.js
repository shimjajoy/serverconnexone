const express = require('express')
const router = express.Router()
const tokenController = require('../controllers/tokenController')

router.route('/')
    .get(tokenController.getToken)

module.exports = router