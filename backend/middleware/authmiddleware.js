
// middleware to protect authentication routes
const jwt = require('jsonwebtoken')

const reqAuth = (req, res, next) => {
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
    } else {
        res.redirect('/')
    }
}
// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt

    // check jwt token exists and verified
    if (token) {
        jwt.verify(token, 'confidential secret', async (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.locals.user = null
                next()
            } else {
                console.log(decodedToken)
                // check for a valid user
                let user = await User.findById(decodedToken.id)
                // pass the user in the views and output to the header
                res.locals.user = user
                next()
            }
        })
    } else {
        res.locals.user = null
        next()
    }
}

module.exports = { reqAuth, checkUser }