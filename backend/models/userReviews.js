
const reviewSchema = new mongoose.Schema({
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    targetUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;