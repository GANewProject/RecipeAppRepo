var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/RecipeApp'; //This will need to change

MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var db = client.db('recipeapp');
    var cursor = db.collection('user');
    var queryUsers = {}; //user input query (logon request) for users goes here
    cursor.find(queryUsers, function(err, res) {
        if (err) throw err;
        client.close();
    });
});