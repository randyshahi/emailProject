var express = require('express');
var router = express.Router()
var emailRouter = require('./emailService')
var accountRouter = require('./accountService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(emailRouter)
router.use(accountRouter)

module.exports = router