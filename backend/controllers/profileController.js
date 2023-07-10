const Profile = require('../models/Profile')


const createProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const profileData = {
            user: userId,
            ...req.body
        };
        const profile = await Profile.create(profileData)
        res.status(200).json(profile)
    } catch (err) {
        res.status(400).json(err.message)
    }
}


const getProfileInfo = async (req, res) => {
    try {
        const profile = await Profile.find({})
        if (!profile) {
            res.status(400).json({"message": "please create a new profile"})
        }
        res.status(200).json(profile)
    } catch (err) {
        re.status(400).json(profile)
    }
}

const updateProfileInfo = async (req, res) => {
    try {
        const { id } = req.params
        const profile = await Profile.findAndUpdate(id)
        const UpdatedProfile = await Profile.findById(id)
        res.status(200).json(UpdatedProfile)
    } catch (err) {
        res.status(400).json(err.message)
    }
}
module.exports = {
    createProfile,
    getProfileInfo,
    updateProfileInfo
}