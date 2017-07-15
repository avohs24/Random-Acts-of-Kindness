var express = require("express"); 
var router = express.Router(); 
var db = require("../models");
var passport = require ("../server.js")

module.exports = function (app){

	app.post("/api/login", passport.authenticate("local", function(req, res){
		res.json ("/login");
});
};

// Route for signing up

app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
		id: req.body.id, 
		firstName: req.body.firstName, 
		lastName: req.body.lastName,
		username: req.body.username, 
		password: req.body.password,  
		creditCard: req.body.creditCard, 
		streetAddress: req.body.streetAddress,
		state: req.body.state
		zip: req.body.zip
		// Should we add email to the user model?
      	email: req.body.email,
    }).then(function() {
      res.redirect(307, "/api/login");
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
        Amount_donated: req.receipt.Amount_donated, 
        Donated_at: req.receipt.Donated_at
      });
    };
  });

// Route for getting data for profile
app.get("/api/user", function(req, res) {
    if (!req.user) {
      res.json({});
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
		state: req.body.state
		zip: req.body.zip
	  });
    };
  });
	

// // DRAFT

// router.get("/User", function (req.res){
// 	db.RAK.findAll({
// 		inlude:[db.User], 
// 	order:[ "firstName"], ["lastName"], ["streetAddress], [state], [zipcode]

// 	})
// })

// router.post ("/user", function(req, res{
// 	db.Receipt.create ({
		
// 	})
// 	.then (function(dbrak)){
// 		res.redirect ("/");
// 	});
// };

// router.post ("/receipt", function(req, res{
// 	db.Receipt.create ({
// 		firstName: req.body.firstName, 
// 		lastName: req.body.lastName, 
// 		Amount_donated: req.body.Amount_donated, 
// 		Donated_at: req.body.Donated_at
// 	})
// 	.then (function(dbrak)){
// 		res.redirect ("/");
// 	});
// };

modules.exports = router; 
