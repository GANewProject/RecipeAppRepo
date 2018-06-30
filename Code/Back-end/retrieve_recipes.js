var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/RecipeApp'; //This will need to change

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var cursor = db.collection('recipe');
    var queryRecipes = {}; //user input query for recipes goes here
    cursor.find(queryRecipes, function(err, res) {
        if (err) throw err;
        db.close();
    });
});