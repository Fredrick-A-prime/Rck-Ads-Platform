const express = require('express')
const router = express()
const { createAds, listAds, updateAds, deleteAds } = require('../controllers/adsController')

router.post('/api/ads', createAds)
router.get('/api/ads', listAds)
router.put('/api/ads/:id', updateAds)
router.delete('/api/ads/delete/:id', deleteAds)

module.exports = router