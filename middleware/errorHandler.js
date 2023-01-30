/**
 * function will handle different types of errors that may occur in your application, 
 * The middleware will send a response with the appropriate HTTP status code and the errr message.
 * @param {*} err  This is an error object that represents an error that occurred during the processing of a request.
 * @param {*} req is the request object, which contains information about the incoming request such as headers, body, and query parameters.
 * @param {*} res is the response object, which is used to send a response to the client. 
 * @param {*} next  is a function that is used to pass control to the next middleware function in the chain. 
 */

const errorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        res.status(400).send(err.message);
    } else if (err.name === 'UnauthorizedError' || err.name === 'JsonWebTokenError') {
        res.status(401).send(err.message);
    } else if (err.name === 'ForbiddenError') {
        res.status(403).send(err.message);
    } else if (err.name === 'NotFoundError') {
        res.status(404).send(err.message);
    } else {
        res.status(500).send(err.message);
    }
};

module.exports = errorHandler;
