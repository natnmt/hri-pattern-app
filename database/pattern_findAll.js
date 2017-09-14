var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hripatternsdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("patterns").find({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
