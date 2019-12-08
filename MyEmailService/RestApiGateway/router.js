var express = require('express');
var app = express();
var router = express.Router();
//var emailRouter = require('./emailService')
var accountRouter = require('./accountService');


router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.post('/', (req, res) => {
    // blank homepage
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

app.listen(80);

//router.use(emailRouter)
router.use(accountRouter)

module.exports = router