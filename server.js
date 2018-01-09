var express = require('express');
var app = express();
app.use(express.static(__dirname));

var sequelize = require('./config/connection.js');

var route = require('./routes.js');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
    require('./config/passport');

app.listen(3001);

app.use(passport.initialize());
app.use(passport.session());

app.use(route);
console.log('Server started at localhost:3001');