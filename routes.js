var express = require('express');
var router = express.Router();
var passport = require('passport');

// middleware that is specific to this router
router.use(function log(req, res, next) {

  console.log("Url request:" + req.url);
    console.log(req._passport.sessionUser);
  //if (req.isAuthenticated())
  //      return next();
  //
  //  // if they aren't redirect them to the home page
  //  res.redirect('/');
    next();
});
// define the home page route
router

.get('/login/facebook',
    // function authenticateFacebook (req, res, next) {
    //     console.log(req);
    // },
    passport.authenticate('facebook',  {scope:
        ['email', 'user_about_me']
    }))
.get('/login/facebook/return',
    passport.authenticate('facebook', {failureRedirect: '/',  successRedirect: '/login', scope:['email'] }), (req, res) =>{
        console.log("req",req);
        res.redirect('/login')
    })


.get('/*', function(req, res) {
		res.sendFile(__dirname + '/index.html');
	})


module.exports = router;