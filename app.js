/* eslint-disable */

'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var dbPattern = require('./routes/pattern');

var cfenv = require('cfenv');
var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json()); // for parsing application/json

var appEnv = cfenv.getAppEnv();

app.get('/database/find/:id', dbPattern.findById);
app.get('/database/findAll', dbPattern.findById);
app.post('/database/insert', dbPattern.addPattern);
app.put('/database/update/:id', dbPattern.updatePattern);
app.delete('/database/delete/:id', dbPattern.deletePattern);
app.get('/database/search/:text', dbPattern.searchPattern);
app.put('/database/feedback/:id', dbPattern.addFeedback);


app.listen(appEnv.port, function() {
	console.log("server starting on " + appEnv.url);
});
