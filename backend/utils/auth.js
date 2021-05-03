//* USER AUTH MIDDLEWARE UTILS *//
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

//? Destructing from the jwtConfig module
const { secret, expiresIn } = jwtConfig;

//? The following functions for are user authentication:

//* #1
//TODO: setTokenCookie
//TODO: Set a JWT cookie after the user is logged in or signed up.
//? It takes in the response, and session user and generates
//? a JWT using the imported SECRET from above.
//? The payload of the JWT is the return value of
//? the instance method User.prototype.toSafeObject()
//! After the JWT is created, it's set to an HTTP-only cookie
//! on the response of the token cookie

//* Sends a JWT cookie:
const setTokenCookie = (res, user) => {
    //? Create the token:
    const token = jwt.sign (
        { data: user.toSafeObject() },
        secret,
        { expiresIn: parseInt(expiresIn) }, //! 604,800 seconds = 1 week
    );

    const isProduction = process.env.NODE_ENV === 'production';

    //? Set the token cookie:
    res.cookie('token', token, {
        maxAge: expiresIn * 1000,
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction && 'Lax',
    })

    return token;
}

//* #2
//TODO: restoreUser function
//TODO: For authenticating the users on certain routes.
//? This is used so that we can have certain routes only be accessible by logged in, authenticated and authorized users

//* Restore user function:
//? This function will be added ad pre-middleware for route handlers
//? AND FOR SOME OF THE FUNCTIONS BELOW
const restoreUser = (req, res, next) => {

    //? token parsed from the cookies
    const { token } = req.cookies;

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if(err) {
            return next()
        }

        try {
            const { id } = jwtPayload.data;
            req.user = await User.scope('currentUser').findByPk(id);
        } catch (e) {
            res.clearCookie('token');
            return next();
        }

        if(!req.user) res.clearCookie('token');

        return next();
    })
}

//* #3
//TODO: Auth for requiring a session user to be authenticated before accessing a route:

//? If there is no current user, return a error:
const requireAuth = [
    restoreUser,
    function(req, res, next) {
        if (req.user) return next();

        const err = new Error('Unathorized');
        err.title = 'Unauthorized';
        err.errors = [`Unauthorized`];
        err.status = 401;
        return next(err);
    },
];

module.exports = { setTokenCookie, restoreUser, requireAuth }; 
