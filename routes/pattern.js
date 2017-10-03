/* eslint-disable */

var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('hripatternsdb', server);

db.open(function(err, db) {
  if(!err) {
    console.log("Connected to 'hripatternsdb' database");
    db.collection('patterns', {strict:true}, function(err, collection) {
      if (err) {
        console.log("The 'patterns' collection doesn't exist. Creating it with sample data...");
        db.createCollection("patterns", function(err, res) {
          if (err) throw err;
            console.log("Collection created!");
        });
      }
    });
  }
});

exports.searchPattern = function(req, res) {
  var text = req.params.text;
  console.log('Searching patterns');
  console.log(text)
  const valueParam = {$regex : `.*${text}.*`, '$options' : 'i'}
  const query = {$or: [
    {"id": valueParam},
    {"name": valueParam},
    {"type": valueParam},
    {"context.description": valueParam},
    {"forces": valueParam},
    {"problem": valueParam},
    {"init_state.description": valueParam},
    {"end_state.description": valueParam},
    {"solution_layer.type": valueParam},
  ]}
  db.collection('patterns', function(err, collection) {
    console.log(err)
    collection.find(query).toArray(function(err, results){
      console.log(results)
      res.send(results);
    });
  });
};

exports.findById = function(req, res) {
  var id = req.params.id;
  console.log('Retrieving pattern: ' + id);
  db.collection('patterns', function(err, collection) {
    collection.findOne({'id': {$regex : new RegExp(id, "i")}}, function(err, item) {
      res.send(item);
    });
  });
};

exports.findAll = function(req, res) {
  db.collection('patterns', function(err, collection) {
    collection.find().toArray(function(err, items) {
      res.send(items);
    });
  });
};

exports.addPattern = function(req, res) {
  var pattern = req.body
  console.log('Adding pattern: ' + JSON.stringify(pattern));
  db.collection('patterns', function(err, collection) {
    collection.insert(pattern, {safe:true}, function(err, result) {
      if (err) {
            console.log('Error' + err)
          res.send({'error':'An error has occurred'});
      } else {
          console.log('Success: ' + JSON.stringify(result[0]));

          console.log('Pattern inserted.')
          res.send(result[0]);
      }
    });
  });
}


exports.updatePattern = function(req, res) {
  var id = req.params.id;
  var idObject = new mongo.ObjectID(id);
  var pattern = req.body;
  console.log('Updating pattern: ' + id);
  db.collection('patterns', function(err, collection) {
    collection.update({'_id': idObject}, pattern, {safe:true}, function(err, result) {
      if (err) {
        console.log('Error updating pattern: ' + err);
        res.send({'error':'An error has occurred'});
      } else {
        console.log('' + result + ' document(s) updated');
        res.send(pattern);
      }
    });
  });
}

exports.deletePattern = function(req, res) {
  var id = req.params.id;
  console.log(id)
  var idObject = new mongo.ObjectID(id);
  console.log('Deleting pattern: ' + id);
  db.collection('patterns', function(err, collection) {
    collection.remove({'_id': idObject}, {safe:true}, function(err, result) {
      if (err) {
        res.send({'error':'An error has occurred - ' + err});
      } else {
        console.log('' + result + ' document(s) deleted');
        res.send(req.body);
      }
    });
  });
}
