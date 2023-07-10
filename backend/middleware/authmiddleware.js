
// middleware to protect authentication routes
const jwt = require('jsonwebtoken')

const reqAuth = (req, res, next) {
    const token = req.cookies.jwt

    // check jwt token exists and verified
    if (token) {
        jwt.verify(token, 'confidential secret', (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/')
            } else {
                console.log(decodedToken)
                next()
            }
        })
    }
    res.redirect('/')
}

module.exports = reqAuth