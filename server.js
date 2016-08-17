var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var passport = require('passport');
var cookieParse = require('cookie-parser');
var session = require('express-session');
// app.use(cookieParse());
// app.use(session({secret:'meanstackisthebest'}));
// app.use(passport.initialize());
// app.use(passport.session());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));

var assignment = require("./assignment/app.js");
assignment(app);

app.listen(3001);