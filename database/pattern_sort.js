var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hripatternsdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // 1 is ascending, -1 is descending
  var mysort = { name: 1 };
  db.collection("patterns").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
