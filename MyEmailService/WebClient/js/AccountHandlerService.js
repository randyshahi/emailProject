// use strict to make sure new js is used as opposed to old js
'use strict'

function TryLogin(username, password) {
    let adminUsername = "admin";
    let adminPassword = "admin";
    if (username == adminUsername
        && password == adminPassword) {
        // login was successful, send user to their inbox
        // (real logic will submit the infor to the server. this is just for debuggin purposes)
        window.location = 'main.html'; 
        event.preventDefault(); //this cancels default behaviour and allow redirect to main.html
        // stops event propogation outside of this function
    }
    else {
        // login failed, return an alert for now
        alert("login failed");
    }
};

function CreateNewAccount(username, password, confirmPassword){
    if (password != confirmPassword) {
        alert("password and confirm password do not match");
    }

    // Send the information to the node.js server that will handle these request
    // sending to node.js using a post method
};