//server.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
var port = 3000;

app.get('/', function(req, res) {
    res.send('Welcome to the Recipe App page!');
});

app.listen(port, function() {
    console.log('Listening on port: ' + port);
});