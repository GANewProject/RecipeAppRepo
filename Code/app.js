//app.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
var routes = require('./Back-end/routes/routes');
var port = 3000;

//Use routes defined in routes.js
app.use('/', routes);

//Start server
app.listen(port, function() {
    console.log('Listening on port: ' + port);
});