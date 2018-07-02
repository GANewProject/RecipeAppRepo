var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/RecipeApp'; //This will need to change

MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var db = client.db('recipeapp');
    var cursor = db.collection('recipe');
    var deleteRecipe = {}; //user input for recipe to delete goes here
    cursor.deleteOne(deleteQuery, function(err, res) {
        if (err) throw err;
        client.close();
    });
});