var express= require("express");
var db = require("../models")

// Database - Get call for User/Receipt

module.exports = function(app, rp){
	app.get("/", function(req, res){

	});
	app.get('/user', function (req,res){
		res.json
	})

}


app.get ('/receipt', function (req,res){
	res.render ('receipt');
});

// Database - Post to NewUser

module.exports = function (app){
	app.post("/api/rak", function (req, res){
		db.User.create (req.body).then(function(dbUser){
			res.json(dbRAK);
		});
	});
}

// Receipt Page

app.post ("api/receipt", function (req, res){
	db.Receipt.create ({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		Amount_donated: req.body.Amount_donated,
		Donated_at: req.body.Donated_at
}).then (function(dbRAK))

app.listen (5000);
