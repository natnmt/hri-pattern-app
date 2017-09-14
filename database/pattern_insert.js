var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hripatternsdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = {
    name: "test",
    id: "test",
    alias: "",
    type: "",
    parent_pattern: "",
    children_patterns: [1, 2],
    source: [],
    context: {
      description: "",
      parameters: [{
        name: "",
        value: "",
      }],
    },
    forces: "",
    problem: "",
    init_state: {
      description: "",
      parameters: [{
        name: "",
        value: "",
      }],
    },
    end_state: {
      description: "",
      parameters: [{
        name: "",
        value: "",
      }],
    },
    solution_layer: {
      type: "",
      parameters: [{
        name: "",
        value: "",
      }],
      solution: "",
      confidence: 0,
      figure_path: "",
      communication: [],
      adapting_vars: [{
        name: "",
        value: "",
      }],
    },
    related_patterns: [],
    pattern_link: [],
    resulting_context: "",
    example: "",
    synopsis: "",
    diagram_path: "",
    rationale: "",
    literature: [],
    management: "",
    implementation: "",
    related_patterns: [],
    pattern_link: [],
    acknowledgments: "",
    organization: "",
    date_creation: "",
    date_edited: [],
  };
  db.collection("patterns").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
