// use strict to make sure new js is used as opposed to old js
'use strict'

function TryLogin(username, password) {
    let adminUsername = "admin";
    let adminPassword = "admin";
    if (username == adminUsername
        && password == adminPassword) {
        // login was successful, return an alert for now
        alert("login was successful!")
    }
    else {
        // login failed, return an alert for now
        alert("login failed")
    }
}