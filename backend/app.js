const express = require('express')
const { DB_URL } = require('./props')
const mongoose = require('mongoose')

const app = express()
mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => console.log('db connected'))

app.use(express())

module.exports = app