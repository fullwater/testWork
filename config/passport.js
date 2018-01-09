var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var User = require('../models/User.js');

passport.use(new Strategy({
        clientID: "***************",
        clientSecret: "***************************",
        callbackURL: 'http://localhost:3001/login/facebook/return',
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
    function(req, accessToken, refreshToken, profile, cb) {
        var user;
        console.log("profile", profile);
        let userInfo = {
            facebookID: profile._json.id,
            name: profile._json.name,
            mail: profile._json.email,
            about: "Test user"
        }
        User.findOne({where: {mail: userInfo.mail}})
            .then( userInstance => {
                if(userInstance){
                    console.log("User instance: ", userInstance.get({ plain: true }));
                    user = userInstance.get({ plain: true });
                }
                else{
                    return User.create(userInfo);
                }
            })
            .then( userCreatedInstance => {
                if(userCreatedInstance){
                    console.log("New user instance: ", userCreatedInstance.get({ plain: true }));
                    user = userCreatedInstance.get({ plain: true });
                }
            });
        return cb(null, user);

    }));

passport.serializeUser( function(user, done) {
    //var sessionUser = { _id: user.id, name: user.name, email: user.mail}
    //done(null, sessionUser)
    done(null, user);
});

passport.deserializeUser( function(sessionUser, done) {
    // The sessionUser object is different from the user mongoose collection
    // it's actually req.session.passport.user and comes from the session collection
    done(null, sessionUser)
});


// Initialize Passport and restore authentication state, if any, from the
// session.
