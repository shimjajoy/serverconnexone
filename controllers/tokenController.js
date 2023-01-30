const asyncHandler = require('express-async-handler')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

// Define a secret key to sign the JWT
const secret = crypto.randomBytes(32).toString('hex');
// Define the payload of the JWT
const payload = {
    userId: 123,
    name: 'admin'
};

/**
 * Function to generate jwt token
 * @desc Get access token and refresh token
 * @route GET /token
 */
const getToken = asyncHandler(async (req, res, next) => {
    // Generate the access token
    const accessToken = jwt.sign(payload, secret, { expiresIn: '30d' });
    // Generate the refresh token
    const refreshToken = jwt.sign(payload, secret, { expiresIn: '30d' });
    // Send the tokens as a response
    res.json({ accessToken, refreshToken });
})

module.exports = {
    secret,
    getToken
}