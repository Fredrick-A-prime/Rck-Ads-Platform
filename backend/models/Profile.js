const User = require('./User')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    contact: {
        phone: {
            type: String,
            default: ''
        },
        address: {
            type: String,
            default: ''
        }
    },
    profilePicture: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const profile = mongoose.model('profile', profileSchema)

module.exports = profile