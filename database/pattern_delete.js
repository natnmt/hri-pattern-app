var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hripatternsdb";

MongoClient.connect(url, function(err, db) {
  db.collection('patterns', function(err, collection) {
    collection.remove({ id: "C001" }, {safe:true}, function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
});
