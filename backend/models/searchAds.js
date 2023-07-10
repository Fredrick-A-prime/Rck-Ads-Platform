const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    query: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    userId: {
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
