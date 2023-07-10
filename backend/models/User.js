const mongoose = require('mongoose')
const { isEmail, isStrongPassword } = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'enter your username'],
        unique: true,
        minlength: [2, 'username should not be less than 2 characters'],
        maxlength: [12, 'username should not exceed 12 characters']
    },
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'please enter your password'],
        minlength: [8, 'password can not be less than 8 characters'],
        validator: [isStrongPassword, 'please enter a strong password']
    }
})
// hooks to write on the console before an action on the database is performed
    // save fuction 
UserSchema.post('save', (docs, next) => {
    console.log("new user created and saved", docs)
    next()
})
// before the new user is saved
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})
// static method to login user
userSchema.static.login = async function (username, email, password) {
    const user = await this.findOne({ email })
    // check if email exists
    if (user) {
        // the password entered by the user and the hashed password saved on the db
        const auth = bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw Error("incorrect password")
    }
    throw Error("incorrect email")
}

const User = mongoose.model('User', UserSchema)

module.exports = User
