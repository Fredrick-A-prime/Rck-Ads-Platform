const Category = require('../models/Category')

const createCategories = async (req, res) => {
    try {
        const category = await Category.create(req.body)
        if (!category) {
            console.log("category can not be created")
        }
        res.status(201).json(category)
    } catch (err) {
        res.status(400).json(err.message)
    }

}


const getCategories = async (req, res) => {
    try {
        const category = await Category.find({})
        if (!category) {
            res.status(200).json({ message: "category does not exist" })
        }
        res.status(201).json(category)
    } catch (err) {
        res.status(400).json(err.message)
    }

}

const getCategoriesById = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findById(id, req.body)

        if (!category) {
            res.status(200).json({ message: "category does not exist" })
        }
        res.status(201).json(category)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

/* const updateCategories = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findByIdAndUpdate(id, req.body, { new: true })
        if (!category) {
            res.status(400).json({ message: "ad is can not be updated" })
        }
        res.status(200).json(category)
    } catch (err) {
        res.status(400).json(err.message)
    }
} */

const deleteCategories = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findByIdAndDelete(id)
        res.status(201).json(category)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

module.exports = {
    createCategories,
    getCategories,
    getCategoriesById,
    deleteCategories
}