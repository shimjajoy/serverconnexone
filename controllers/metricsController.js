const errorHandler = require('../middleware/errorHandler')
const tokenController = require('../controllers/tokenController')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const client = require('prom-client')

// Create a Registry which registers the metrics
const register = new client.Registry()
// Add a default label which is added to all metrics
register.setDefaultLabels({
    app: 'example-nodejs-app'
})
// Enable the collection of default metrics
client.collectDefaultMetrics({ register })


const getallDefaultmetrics = asyncHandler(async (req, res, next) => {
    try {
        //verifie the authorization token from header,incase verfy fails it will excute the errorHandler() inside catch
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, tokenController.secret);
        //Check if valid format with the defined timeSchema
        if (token) {
            // Return all metrics the Prometheus exposition format
            res.set('Content-Type', register.contentType);
            let metrics = await register.metrics();
            // res.send(metrics);
             res.status(200).send(metrics);
        }
    } catch (error) {
        errorHandler(error, req, res, next);
    }
})

module.exports = {
    getallDefaultmetrics
}