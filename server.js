// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();
var path = require('path');
var db = require("./models");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 5000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + '/dist'))


//For passport sessions
app.use(session({
  secret: 'randomactofkindness',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// -------------------------------------------------



// -------------------------------------------------
// * (get) - load HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes
//redirect the user to our rendered React application
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// -------------------------------------------------


// Starting our express server
db.sequelize.sync({ force: true }).then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});
