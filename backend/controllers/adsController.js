const ads = require('../models/Ads')
const Category = require('../models/Category')

const createAds = async (req, res) => {
    try {
        const { category } = req.body

        const categoryId = await Category.findById(category)
        if (!categoryId) {
            return res.status(404).json({ message: 'not found' })
        }

        const adsData = {
            category: categoryId,
            ...req.body
        }
        const ad = await ads.create(adsData)
        res.status(201).json(ad)
    } catch (err) {
        res.status(400).json(err.message)
    }

}


const listAds = async (req, res) => {
    try {
        const ad = await ads.find({})
        if (!ad) {
            res.status(200).json({message: "ad does not exist"})
        }
        res.status(201).json(ad)
    } catch (err) {
        res.status(400).json(err.message)
    }

}

const updateAds = async (req, res) => {
    try {
        const { category } = req.body

        const categoryId = await Category.findById(category)
        if (!categoryId) {
            return res.status(404).json({ message: 'not found' })
        }

        const { id } = req.params
        const adsData = {
            category: categoryId,
            id,
            ...req.body
            }
        const ad = await ads.findByIdAndUpdate(adsData, { new: true })
        if (!ad) {
            res.status(400).json({ message: "ad is can not be updated"})
        }
        res.status(200).json(ad)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

const deleteAds = async (req, res) => {
    try {
        const { id } = req.params
        const ad = await ads.findByIdAndDelete(id)
        res.status(201).json(ad)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

module.exports = {
    createAds,
    listAds,
    updateAds,
    deleteAds
    }