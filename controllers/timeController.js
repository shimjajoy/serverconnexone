const timeSchema = require('../timeSchema')
const { validate } = require('jsonschema')
const errorHandler = require('../middleware/errorHandler')
const asyncHandler = require('express-async-handler')
const tokenController = require('../controllers/tokenController')
const jwt = require('jsonwebtoken')

const getTime = asyncHandler(async (req, res, next) => {
    // to get the current time in epoch seconds
    const time = Date.now() / 1000;
    // create the response object
    const response = {
        epoch: time
    };
    try {
        //verifie the authorization token from header,incase verfy fails it will excute the errorHandler() inside catch
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, tokenController.secret);
        // validate the response against the schema
        const validationResult = await validate(response, timeSchema);
        //Check if valid format with the defined timeSchema
        if (validationResult.valid)
            return res.status(200).send(response);
    } catch (error) {
        errorHandler(error, req, res, next);
    }
})
module.exports = {
    getTime
}
