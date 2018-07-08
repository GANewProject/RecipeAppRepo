// recipes.js

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/Recipes/Insert', function(req, res) {
    res.sendFile(path.join(__dirname, '../../Front-end/HTML/Recipes/Insert.html'));
});

router.get('/Recipes/Recipe', function(req, res) {
   res.sendFile(path.join(__dirname, '../../Front-end/HTML/Recipes/Recipe.html'));
});

router.get('/Recipes/Retrieve', function(req, res) {
    res.sendFile(path.join(__dirname, '../../Front-end/HTML/Recipes/Retrieve.html'));
});

module.exports = router;