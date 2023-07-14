const Profile = require('../models/Profile')
const User = require('../models/User')


const createProfile = async (req, res) => {
    try {
        const { firstName, lastName, contact, profilePicture, user } = req.body

        const userId = await User.findById(user)
        if (!userId) {
            return res.status(404).json({ error: 'User not found' });
        }

        const profileData = {
            user: userId,
            ...req.body
        };
        const profile = await Profile.create(profileData)
        res.status(201).json(profile)
    } catch (err) {
        res.status(400).json(err.message)
    }
}


const getProfileInfo = async (req, res) => {
    try {
        const profile = await Profile.find({})
        if (!profile) {
            res.status(400).json({message: "please create a new profile"})
        }
        res.status(200).json(profile)
    } catch (err) {
        re.status(400).json(err.message)
    }
}

const updateProfileInfo = async (req, res) => {
    try {
        const { id } = req.params
        const profile = await Profile.findByIdAndUpdate(id, req.body, { new: true})
        if (!profile) {
            res.status(401).json({ message: 'profile not found' })
        }
        res.status(201).json(profile)
    } catch (err) {
        res.status(400).json(err.message)
    }
}
module.exports = {
    createProfile,
    getProfileInfo,
    updateProfileInfo
}