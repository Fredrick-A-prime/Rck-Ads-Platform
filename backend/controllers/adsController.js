const ads = require('../models/Ads')

const createAds = async (req, res) => {
    try {
        const ad = await ads.create(req.body)
        res.status(201).json(ad)
    } catch (err) {
        res.status(400).json(err.message)
    }

}


const listAds = async (req, res) => {
    try {
        const ad = await ads.find({})
        if (!ad) {
            res.status(200).json({"message": "ad does not exist"})
        }
        res.status(201).json(adsList)
    } catch (err) {
        res.status(400).json(err.message)
    }

}

const updateAds = async (req, res) => {
    try {
        const { id } = req.params
        const ad = await ads.findByIdAndUpdate(id, req.body)
        if (!ad) {
            res.status(400).json({"error": "ad is can not be updated"})
        }
        const updateAds = await ads.findById(id)
        res.status(201).json(updateAds)
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