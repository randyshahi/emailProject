var express = require('express');
var router = express.Router()
var emailRouter = require('./emialService')
var accountRouter = require('./accountService')
//var authRouter = require('../controller/AuthController')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(emailRouter)
router.use(accountRouter)
//router.use(authRouter)

module.exports = router