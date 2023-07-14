const express = require('express')
const router = express()
const searchAd  = require('../controllers/searchAdsController')

router.get('/api/search/ads', searchAd)

module.exports = router