const Reviews = require('../models/userReviews')
const User = require('../models/User')

const createReviews = async (req, res) => {
    try {
        const { reviewer, targetUser, rating, comment } = req.body
        const reviewerId = await User.findById(reviewer)
        if (!reviewerId) {
            return res.status(404).json({ error: 'User not found' });
        }

        const targetUserId = await User.findById(targetUser)
        if (!targetUserId) {
            return res.status(404).json({ error: 'User not found' });
        }

        const reviewData = {
            reviewer: reviewerId,
            targetUser: targetUserId,
            ...req.body
        };
        const reviews = await Reviews.create(reviewData)
        res.status(201).json(reviews)
    } catch (err) {
        res.status(400).json(err.message)
    }
}


const getReviews = async (req, res) => {
    try {
        const reviews = await reviews.find({})
        if (!reviews) {
            res.status(400).json({ message: "review does not exists" })
        }
        res.status(200).json(reviews)
    } catch (err) {
        re.status(400).json(err.message)
    }
}

const deleteReviews = async (req, res) => {
    try {
        const { id } = req.params
        const reviews = await Reviews.findByIdAndDelete(id, req.body, { new: true })
        if (!reviews) {
            res.status(401).json({})
        }
        res.status(201).json(reviews)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

module.exports = {
    createReviews,
    getReviews,
    deleteReviews
}