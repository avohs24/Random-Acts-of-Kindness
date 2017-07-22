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
// ))
//
//
//
//     function(username, password, done){
//       User.findOne({ where:{
//       username : username,
//       password : password
//     }, function(err, user){
//       if(err){return done(err);}
//       if (!user){return done(null, false);}
//       if(!user.verifyPassword(password)){ return done(null, false);}
//     }});
//   }
// ))
//
//
//
//
// // passport.use('local-login', new LocalStrategy({
// //     // by default, local strategy uses username and password, we will override with email
// //     usernameField : 'username',
// //     passwordField : 'password',
// //     passReqToCallback : true // allows us to pass back the entire request to the callback
// // },
// // function(req, , password, done) { // callback with email and password from our form
// //
// //     // find a user whose email is the same as the forms email
// //     // we are checking to see if the user trying to login already exists
// //     User.findOne({ 'local.email' :  email }, function(err, user) {
// //         // if there are any errors, return the error before anything else
// //         if (err)
// //             return done(err);
// //
// //         // if no user is found, return the message
// //         if (!user)
// //             return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
// //
// //         // if the user is found but the password is wrong
// //         if (!user.validPassword(password))
// //             return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
// //
// //         // all is well, return successful user
// //         return done(null, user);
// //     });
// //
// // }));
// }
