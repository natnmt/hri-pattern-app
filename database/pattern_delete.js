var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hripatternsdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { name: 'test' };
  db.collection("patterns").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
