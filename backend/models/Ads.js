const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User')

const AdSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Ads = mongoose.model('Ads', AdSchema)

module.exports = Ads