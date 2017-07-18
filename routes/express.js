var express = require("express");
var router = express.Router();
var db = require("../models");
var passport = require ("../config/passport.js")

module.exports = function (app){

	app.post("/api/login", passport.authenticate("local", function(req, res){
		res.json ("/login");


})
);



// Route for signing up

app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
		id: req.body.id,
		firstName: req.body.FirstName,
		lastName: req.body.LastName,
		username: req.body.username,
		password: req.body.signupPassword,
		creditCard: req.body.creditCard,
		streetAddress: req.body.Address,
		state: req.body.State,
		zip: req.body.zipCode
    }).then(function() {
      res.redirect(200, "/api/login");
    }).catch(function(err) {
      res.json(err);
    });
  });

app.get("/api/signup", function(req, res){
	res.json();
});

	app.post("/api/receipt", function(req, res) {
	    console.log(req.body);
	    db.Receipt.create({
	        id: req.body.id,
	        firstName: req.body.firstName,
	        lastName: req.body.lastName,
	        Amount_donated: req.body.Amount_donated

	    }).then(function() {
	      res.redirect(200, "/api/login");
	    }).catch(function(err) {
	      res.json(err);
	    });
	  });

// GET

// Route for signing user out

 app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

 // Route for getting data for receipt

 app.get("/api/receipt", function(req, res) {
    if (!req.receipt) {
      res.json({});
    }
    else {
      res.json({
        id: req.user.id,
        firstName: req.receipt.firstName,
        lastName: req.receipt.lastName,
        Amount_donated: req.receipt.Amount_donated
      });
    };
  });


// Route for getting data for profile
app.get("/api/user", function(req, res) {
    if (!req.user) {
      res.json({
			});
    }
    else {

      res.json({

		id: req.body.id,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		password: req.body.password,
		creditCard: req.body.creditCard,
		streetAddress: req.body.streetAddress,
		state: req.body.state,
		zip: req.body.zip
	  });
    };
  });

}
