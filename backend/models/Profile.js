const User = require('./User')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    firstName: {
        type: String,
        required: [ true, 'Please enter your first name']
    },
    lastName: {
        type: String,
        required: [ true, 'Please enter your last name']
    },
    contact: {
        phone: {
            type: String,
            required: true,
            default: '',
            validate: {
                validator: function (v) {
                    const phoneNumRegex = /^(\\+?234|0)[789]\\d{9}$/

                    return phoneNumRegex.test(v)
                },
                message: 'invalid phone number'
            }
        },
        address: {
            type: String,
            default: ''
        }
    },
    profilePicture: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},
    {
        timestamps: true
    }
)

const profile = mongoose.model('profile', profileSchema)

module.exports = profile