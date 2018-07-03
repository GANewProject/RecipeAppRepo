var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/RecipeApp'; //This will need to change

MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var db = client.db('recipeapp');
    var cursor = db.collection('user');
    var newUser = {}; //user input for new user (create new account) goes here
    cursor.insertOne(newUser, function(err, res) {
        if (err) throw err;
        client.close();
    });
});