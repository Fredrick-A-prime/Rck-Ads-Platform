const mongoose = require('mongoose');
const Schema = mongoose.Schema

const searchSchema = new mongoose.Schema({
    query: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    location: {
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
);

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;
