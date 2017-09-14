var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hripatternsdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { name: "test" };
  var newvalues = { name: "Mickey", id: "111" };
  db.collection("patterns").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
Run example »
