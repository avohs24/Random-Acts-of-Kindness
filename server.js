// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");


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

app.use(express.static("./dist"));

// -------------------------------------------------

// -------------------------------------------------
// * (get) - load HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes
//redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
