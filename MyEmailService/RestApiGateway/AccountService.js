var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../model/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('./config');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// communicate with Account Microservice to create account
// stub
router.post('/createAccount', (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8)
    console.log(hashedPassword)
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }, (err, user) => {
        // will send this information to AccountService and wait for response
        // when response received, respond to client

        if (err) return res.status(500).send("Registration failed")

        // I guess the gateway can keep track of "sessions"
        var token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 })

        // This will return 200 or an error code depending on if account was
        // successfully created
        res.status(200).send({ auth: true, token: token })
    })
})

// communicate with account service to login
// stub
router.post('/login', (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8)
    console.log(hashedPassword)
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }, (err, user) => {
        // send the user to accountService to see if login was successful

        // wait for response from accountService

        // when accountService response received and successful, 
        // return success and sesision id

    })
})

// communicate with account service to end session/logout
// stub
router.post('/logout', isAuthorized, (req, res) => {
    // parse out the session ID and remove it from the mongoDB

    // return success if session ID removed from mongoDB
}
})

// communicate with account service to change password
// stub
router.post('/changeCredentials', isAuthorized, (req, res) => {
    // send the updated credentials to the accoutService and wait

    // when response recieved, send success to client
})
})

module.exports = router;