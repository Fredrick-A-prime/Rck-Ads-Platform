const express = require('express')
const { getSignupUser, postSignupUser, getLoginUser, postLoginUser } = require('../controllers/UserAuth')

const router = express()

router.get('/api/signup')
router.post('/api/signup', postSignupUser)
router.get('/api/login')
router.post('/api/login', postLoginUser)
router.get('/api/logout', )

module.exports = router