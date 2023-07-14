const express = require('express')
const { DB_URL } = require('./props')
const mongoose = require('mongoose')
const AuthRoutes = require('./routes/AuthUserApi')
const adsRoutes = require('./routes/adsApi')
const profileRoutes = require('./routes/profileApi')
const reviewsRoutes = require('./routes/reviewAPI')
const categoryRoutes = require('./routes/categoryApi')
const searchRoutes = require('./routes/searchAdsApi')
const cookieParser = require('cookie-parser')
const { checkUser } = require('./middleware/authmiddleware')


const app = express()
mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => console.log('db connected'))

app.use(express())
app.use(express.json())
app.use(cookieParser())

app.get('*', checkUser)
app.use(AuthRoutes)
app.use(adsRoutes)
app.use(profileRoutes)
app.use(reviewsRoutes)
app.use(categoryRoutes)
app.use(searchRoutes)

module.exports = app