const express = require('express')
const router = express()
const { createReviews, getReviews, deleteReviews } = require('../controllers/reviewsController')

router.post('/api/reviews/post', createReviews)
router.get('/api/reviews', getReviews)
router.delete('/api/reviews/delete', deleteReviews)

module.exports = router