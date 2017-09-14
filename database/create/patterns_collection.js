var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hripatternsdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("patterns", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
