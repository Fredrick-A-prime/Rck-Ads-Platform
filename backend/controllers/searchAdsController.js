const Ad = require('../models/Ads')

const searchAds = async (req, res) => {
    try {
        // GET /api/search/ads - Retrieve ads based on category and location with pagination
        const { category, location, filterBy, page, limit } = req.query;

                // Build the search criteria object
        const searchCriteria = {};

        if (category) {
            searchCriteria.category = category;
        }

        if (location) {
            searchCriteria.location = location;
        }

        // Apply additional filters based on the filterBy parameter
        if (filterBy) {
            switch (filterBy) {
                case 'price':
                    // Apply sorting logic for price low to high
                    searchCriteria.$orderby = { price: 20000 };
                    break;
                // Add more cases for other filter options if needed
                default:
                    break;
            }
        }

         // Set the default values for page and limit
        const pageNumber = parseInt(page) || 1;
        const pageSize = parseInt(limit) || 10;

        // Calculate the skip value based on the page and limit
        const skip = (pageNumber - 1) * pageSize;

        // Find ads matching the search criteria with pagination
        const ads = await Ad.find(searchCriteria)
            .populate('category')
            .skip(skip)
            .limit(pageSize);
        res.status(200).json(ads);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }

};

module.exports = searchAds