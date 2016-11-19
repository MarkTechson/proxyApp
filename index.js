/**
 * This app is meant to be used for educational purposes only
 * as a way to help developers write a proxy server. Ideally this
 * app would be deployed to a server and in turn become the endpoint
 * that someone can access to get data that requires a server side call
 * vs a browser side ajax
 */
var express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Add some middle wear that'll make life easier
app.use(bodyParser.json());

// define a route for this application
app.get('/', function (req, res) {
    fetch('https://api.github.com/users/github').then(function(res) {
        return res.json();
    }).then(function(json) {
        res.json(json);
    });
});

// Define the port
app.listen(process.env.PORT || 3000);