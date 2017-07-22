// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();
var path = require('path');
var db = require("./models");
var cors = require('cors')
var request = require('request');
var flash = require('express-flash');
var rp = require('request-promise');


// Create a new express app
var app = express();
app.use(cors())
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 5000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static(__dirname + '/dist'));

//For passport sessions
app.use(session({secret: 'randomactsofkindness'}));
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash());

// -------------------------------------------------


require('./routes/express.js')(app, rp);
require('./config/passport.js')(app, passport);



// -------------------------------------------------
// * (get) - load HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes
//redirect the user to our rendered React application

//server-side org hunter api call by term
app.get('/api/get-organizations/:term', function (req, res) {
  const API_KEY = '58c5806d11fbc6c7da9b796db4f9a77c';
  const ROOT_URL = `http://data.orghunter.com/v1/charitysearch?user_key=${API_KEY}`;
  const url = `${ROOT_URL}&searchTerm=$`;
  const query = req.params.term
  function orgRequest(endpoint,term){
    request(endpoint+term , function (error, response, body) {
      res.json(response);
    });
  };
  orgRequest(url, query);
});

//server-side org hunter api call for all orga
app.get('/api/get-organizations', function (req, res) {
  const API_KEY = '58c5806d11fbc6c7da9b796db4f9a77c';
  const ROOT_URL = `http://data.orghunter.com/v1/charitysearch?user_key=${API_KEY}`;
  const url = `${ROOT_URL}`;
  const query = req.params.term
  function orgRequest(endpoint){
    request(endpoint, function (error, response, body) {
      res.json(response);
    });
  };
  orgRequest(url);
});

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// -------------------------------------------------

// Starting our express server
db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
});
