//TODO: Require all of the express npm packages:

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");

//TODO: For error handling in sequelize:
const { ValidationError } = require('sequelize');

//TODO: Import routes:
const routes = require("./routes");


//TODO: Create variable for checking if the environment is production or not:
const { environment } = require('./config');
const router = require('./routes');
const isProduction = environment === 'production'

//TODO: initialize the Express Application:
const app = express();

//TODO: Connect the morgan middleware
//? used to log info about requests and responses
app.use(morgan('dev'));

//TODO: Add cookie-parser middleware and express.json()
//? CP is used for parsing cookies:
app.use(cookieParser());
//? Ex.json is used for parsing JSON bodies of requests with the "Content-Type": "application/json";
app.use(express.json());

//TODO: A whole bunch of security centered middleware go here:

//? Security Middleware:
if(!isProduction) {
    //! We want this in order to enable CORS only while in development
    app.use(cors());
};

//? Helmet helps set up a variety of headers in order to better enable security on the app:
app.use(helmet({
    //* We can safely disable contentSecurityPolicy because React does a pretty good job protecting users against Cross-Site Scripting attacks
    contentSecurityPolicy: false
}))

//? _CSRF goes here:
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        }
    })
);

//? This is used in order to connect all the routes.
//? I think it has to go at the bottom, after all of the middleware:
app.use(routes);

//* ERROR HANDLERS GO HERE *//

//TODO: Connect all of the error handling routes
//? This must go after all of the other routes
//? Therefore I put it here, after the app.use(routes)

//* #1
//TODO: The first error handler is for catching any routes that don't match any of the routes defined
//TODO: -- It returns a server error with the status code of 404
app.use((_req, _res, next) => {
    const err = new Error(`The requested resource could not be found`);
    err.title = "Resource Not Found";
    err.errors = [`The requested resource could not be found`];
    err.status = 404;
    //? Here, next() is invoked with an error
    //? This is because next() invoked with nothing means
    //! Errors handlers defined after this
    //! WILL NOT BE INVOKED
    //? But, next(err) invoked with the error means that
    //? Error Handlers defined after this middleware WILL be invoked.
    next(err);
});

//* #2
//TODO: The second error handler is for catching Sequelize errors
//TODO: -- and formatting them to look pretty before sending the error response

//? Process sequelize errors
app.use((err, _req, _res, next) => {
    //? check if the error is a
    //! SEQUELIZE ERROR
    if (err instanceof ValidationError) {
        err.errors = err.errors.map(e => e.message);
        err.title = `Validation Error`
    }
    next(err);
})

//* #3
//TODO: The third error handler is for formatting all of the errors before returning a JSON response
//TODO -- with the error message, the errors array and the error stack trace (if the the environment is in development)
//TODO: -- with the status code of the error message;

//? Error formatter:
app.use((err, _req, res, next) => {
    res.status(err.status || 500)
    console.error(err)
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack
    })
})

module.exports = app;
