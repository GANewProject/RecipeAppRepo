// users.js

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/Account/Login/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../Front-end/HTML/Account/Login.html'));
});

router.get('/Account/My-Recipes', function(req, res) {
   res.sendFile(path.join(__dirname, '../../Front-end/HTML/Account/My-Recipes.html'));
});

router.get('/Account/Create-Account', function(req, res) {
    res.sendFile(path.join(__dirname, '../../Front-end/HTML/Account/Create-Account.html'));
});

module.exports = router;