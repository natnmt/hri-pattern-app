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
    db.collection('persona', {strict:true}, function(err, collection) {
      if (err) {
        console.log("The 'persona' collection doesn't exist. Creating it with sample data...");
        db.createCollection("persona", function(err, res) {
          if (err) throw err;
            console.log("Collection created!");
        });
      }
    });
  }
});

exports.searchPersona = function(req, res) {
  var text = req.params.text;
  console.log('Searching persona: ' + text);
  const valueParam = {$regex : `.*${text}.*`, '$options' : 'i'}
  const query = {$or: [
    {"name": valueParam},
  ]}

  db.collection('persona', function(err, collection) {
    console.log(err)
    collection.find(query).toArray(function(err, results){
      res.send(results);
    });
  });
};

exports.findAll = function(req, res) {
  db.collection('persona', function(err, collection) {
    collection.find().toArray(function(err, items) {
      res.send(items);
    });
  });
};

exports.addPersona = function(req, res) {
  var persona = req.body
  console.log('Adding persona: ' + JSON.stringify(persona));
  db.collection('persona', function(err, collection) {
    collection.insert(persona, {safe:true}, function(err, result) {
      if (err) {
          console.log('Error adding persona: ' + err);
          res.send({'error':'An error has occurred'});
      } else {
          console.log('Success: ' + JSON.stringify(result[0]));

          console.log('Persona inserted.')
          res.send(result[0]);
      }
    });
  });
}

exports.updatePersona = function(req, res) {
  var id = req.params.id;
  var idObject = new mongo.ObjectID(id);
  var persona = req.body;
  console.log('Updating persona: ' + id);
  db.collection('persona', function(err, collection) {
    collection.update({'_id': idObject}, persona, {safe:true}, function(err, result) {
      if (err) {
        console.log('Error updating persona: ' + err);
        res.send({'error':'An error has occurred'});
      } else {
        console.log('' + result + ' document(s) updated');
        res.send(persona);
      }
    });
  });
}

exports.deletePersona = function(req, res) {
  var id = req.params.id;
  var idObject = new mongo.ObjectID(id);
  console.log('Deleting persona: ' + id);
  db.collection('persona', function(err, collection) {
    collection.remove({'_id': idObject}, {safe:true}, function(err, result) {
      if (err) {
        console.log('Error deleting persona: ' + err);
        res.send({'error':'An error has occurred - ' + err});
      } else {
        console.log('' + result + ' document(s) deleted');
        res.send(req.body);
      }
    });
  });
}
