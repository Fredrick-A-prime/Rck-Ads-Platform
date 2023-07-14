const express = require('express')
const router = express()
const { createCategories, getCategories, getCategoriesById, deleteCategories } = require('../controllers/ctyController')

router.post('/api/categories/post', createCategories)
router.get('/api/categories', getCategories),
router.get('/api/categories/:id', getCategoriesById),
router.delete('/api/categories/delete', deleteCategories)

module.exports = router;