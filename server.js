var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));

var assignment = require("./assignment/app.js");
assignment(app);

app.listen(3001);