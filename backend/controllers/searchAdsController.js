const Search = require('../models/searchAds')
const User = require('../models/User')
const Category = require('../models/Category')

const searchAds = async (req, res) => {
    try {
        const { category, user } = req.body;

        const categoryId = await Category.findById(category);
        if (!categoryId) {
            return res.status(404).json({ error: 'Category does not exist' });
        }

        const userId = await User.findById(user);
        if (!userId) {
            return res.status(404).json({ error: 'User does not exist' });
        }

        const searchData = {
            category: categoryId,
            user: userId,
            ...req.body
        };

        const search = await Search.find(searchData);

        const filteredSearch = search.filter((searchedData) => {
            let isValid = true;
            for (const key in req.query) {
                if (searchedData[key] !== req.query[key]) {
                    isValid = false;
                    break;
                }
            }
            return isValid;
        });

        res.status(200).json(filteredSearch);
    } catch (err) {
        res.status(400).json(err.message);
    }
};

module.exports = searchAds