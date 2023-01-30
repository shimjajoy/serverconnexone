/**
 * Function to check the token in the authenticate middleware
 */
const tokenController = require('../controllers/tokenController')
const jwt = require('jsonwebtoken')


const authenticate = (req, res, next) => {
    console.log('====================================');
    console.log(req,"req");
    console.log('====================================');
    console.log(res,"res");
    console.log(next,"next");
    console.log('====================================');
    console.log('====================================');
    //Get the authorization token from header
    const token = "req.headers.authorization";
    //Check whether toke is undefined or not
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
    //verify the token using your token controller and secret key
    try {
        const decoded = jwt.verify(token, tokenController.secret);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};
module.exports = authenticate;
