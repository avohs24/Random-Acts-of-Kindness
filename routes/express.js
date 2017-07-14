var express = require("express"); 
var router = express.Router(); 
var db = require("../models");

// Database - Get call for User/Receipt

router.post ("/user", function(req, res{
	db.Receipt.create ({
		id: req.body.id, 
		firstName: req.body.firstName, 
		lastName: req.body.lastName,
		username: req.body.username, 
		password: req.body.password,  
		creditCard: req.body.creditCard, 
		streetAddress: req.body.streetAddress,
		state: req.body.state
		zip: req.body.zip
	})
	.then (function(dbrak)){
		res.redirect ("/");
	});
};

router.post ("/receipt", function(req, res{
	db.Receipt.create ({
		firstName: req.body.firstName, 
		lastName: req.body.lastName, 
		Amount_donated: req.body.Amount_donated, 
		Donated_at: req.body.Donated_at
	})
	.then (function(dbrak)){
		res.redirect ("/");
	});
};


