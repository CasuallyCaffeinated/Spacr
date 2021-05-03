const { validationResult } = require('express-validator');

//TODO: middleware that customizes the formatting of errors:
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()) {
        const errors = validationErrors
        .array()
        .map((error) => `${error.msg}`);


        const err = Error(`Bad request`);
        err.errors = errors;
        err.status = 400
        err.title = `Bad Request`
        next(err);
    }
    next()
}

module.exports = {
    handleValidationErrors,
}
