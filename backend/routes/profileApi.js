const express = require('express')
const router = express()
const { createProfile, getProfileInfo, updateProfileInfo } = require('../controllers/profileController')

router.post('/api/profile', createProfile)
router.get('/api/profile', getProfileInfo)
router.put('/api/profile', updateProfileInfo)

module.exports = router