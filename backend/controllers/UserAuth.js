const User = require('../models/User')
const jwt = require('jsonwebtoken')

// error handler function
function handleErrors(err) {
    console.log(err.message, err.code)
    // error response
    let errors = { username: '', email: '', password: '' } 

    // incorrect email, err logged on the console
    if (err.message === "incorrect email") {
        errrors.email = "that email is not registered"
    }
    // incorrect password
    if (err.message === "incorrect password") {
        errors.password = "that password is incorrect"
    }

    // validating the duplicate data on the database 
    if (err.code === 11000) {
        errors.email = "email is registered already"
        return errors
    }
    // validation errors
    if (err.message.includes("User validation failed")) {
        // values of the error returned on the console
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    return errors

}

// jwt token for user authentication
const maxAge = Math.floor(Date.now() / 1000) + (60 * 60 * 60)
const createToken = (id) => {
    return jwt.sign({ id }, 'confidential secret', {
        expiresIn: maxAge
        })
}


// sign up and save users details to the database
const postSignupUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await User.create({ username, email, password })
        // create a token
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user: user._id })
    } catch (err) {
        // calling the handlerErrror function and send the error
        const errors = handleErrors(err)
        res.status(404).json(errors)

    }
}


// login and authenticate current user details on the database
const postLoginUser = async (req, res) => {
    const { email, password } = req.body
    // using the login static method to login the user
    try {
        const user = User.login(email, password)
        res.status(200).json({user: user._id})
    } catch (err) {
        const errors = handleErrors(err)
        res.status(404).json(errors)

    }
}

// logout user
const logoutUser = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect('/')
}

module.exports = {
    postSignupUser,
    postLoginUser,
    logoutUser
}