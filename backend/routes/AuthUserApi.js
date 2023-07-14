const express = require('express')
const { postSignupUser, postLoginUser, logoutUser } = require('../controllers/UserAuth')

const router = express()

router.post('/api/signup', postSignupUser)
router.post('/api/login', postLoginUser)
router.get('/api/logout', logoutUser)

module.exports = router