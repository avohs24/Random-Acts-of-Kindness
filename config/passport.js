var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models').User;

module.exports = function (app, passport){

  passport.use(new LocalStrategy(
      function(username, password, done){
        User.findOne({ where:{
        username : username,
        password : password
      }, function(err, user){
        if(err){return done(err);}
        if (!user){return done(null, false);}
        if(!user.verifyPassword(password)){ return done(null, false);}
      }});
    }
  ))



passport.serializeUser(function(user, done){
  return done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.client.findById(id, function(err, user){
    return done(err, user);
  });

});
}
