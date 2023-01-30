const express = require('express')
const router = express.Router()
const path = require('path')

/**
 * Added regex to check  if the requested routed only a slash and that would be for the root
 * Added | which will be or to the regex to check /index .html and .html can be optional as well optional 
 */
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
})

module.exports = router