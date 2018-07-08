//routes.js

const express = require('express');
const router = express.Router();
const path = require('path');

const recipes = require('./recipes');
const users = require('./users');

// Route for home page
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../Front-end/HTML/index.html'));
});

// Route for about us page
router.get('/About-Us', function(req, res) {
    res.sendFile(path.join(__dirname, '../../Front-end/HTML/About-Us.html'));
});

// Import subdirectory routes
router.use('/', recipes);
router.use('/', users);

module.exports = router;