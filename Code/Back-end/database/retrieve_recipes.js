var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/RecipeApp'; //This will need to change

MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var db = client.db('recipeapp');
    var cursor = db.collection('recipe');
    var queryRecipes = {}; //user input query for recipes goes here
    cursor.find(queryRecipes, function(err, res) {
        if (err) throw err;
        client.close();
    });
});