var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var User = require('../models').User;

module.exports = function (app, passport){


passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.client.findOne({where : {id}}).then(
    function(user){
      if (user){
        done(null, user.get());
      }
    }).catch(function(err){
      console.log(err);
    });
  });


passport.use('local-signup', new LocalStrategy({

  username : 'username',
  password : 'password',
  passReqToCallback: true
},
  function(req, username, password, done){
    var generateHash = function(password){
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    };

    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user){
      if(user){
        return done(null, false, req.flash('Message', 'That username is already taken'));
      }
    })
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done){
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(
      function(data){
        if(!data)
          return done(null, false, req.flash('Message', "We can't find this email"));
        if(!bcrypt.compareSync(password, data.password))
          return done(null, false, req.flash('Message', 'Welcome Back!'))
      }).catch(function(err){
        console.log(err);
      });
    }))
  };
