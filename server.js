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

app.use(express.static(__dirname + '/dist'))

//For passport sessions
app.use(session({secret: 'randomactsofkindness', saveUninitialized: true, resave: true}));

app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// -------------------------------------------------


require('./routes/express.js')(app);



// -------------------------------------------------
// * (get) - load HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes
//redirect the user to our rendered React application


app.get('/api/get-organizations/:term', function (req, res) {
  // '/api/get-orgnaizations' called from client
  const API_KEY = '58c5806d11fbc6c7da9b796db4f9a77c';
  const ROOT_URL = `http://data.orghunter.com/v1/charitysearch?user_key=${API_KEY}`;
  const url = `${ROOT_URL}&searchTerm=$`;
  const query = req.params.term
  function orgRequest(endpoint,term){
    request(endpoint+term , function (error, response, body) {
      console.log(endpoint+term);
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      res.json(response);
    });
  };
  orgRequest(url, query);
})

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
