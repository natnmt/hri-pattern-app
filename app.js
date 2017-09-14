/* eslint-disable */

'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./routes/database');

var cfenv = require('cfenv');
var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json()); // for parsing application/json

var appEnv = cfenv.getAppEnv();

app.get('/database/find/:id', db.findById);
app.post('/database/insert', db.addPattern);
app.put('/database/update/:id', db.updatePattern);
app.delete('/database/delete/:id', db.deletePattern);
app.get('/database/search/:text', db.searchPattern);


app.listen(appEnv.port, function() {
	console.log("server starting on " + appEnv.url);
});
