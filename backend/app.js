const express = require('express')
const { DB_URL } = require('./props')
const mongoose = require('mongoose')
const AuthRoutes = require('./routes/AuthUserApi')
const adsRoutes = require('./routes/adsApi')
const profileRoutes = require('./routes/profileApi')
const cookie = require('cookie-parser')

const app = express()
mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => console.log('db connected'))

app.use(express())
app.use(express.json())
app.use(cookie())

app.use(AuthRoutes)
app.use(adsRoutes)
app.use(profileRoutes)

module.exports = app