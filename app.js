require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const routers = require('./routers')
const errorHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routers)
app.use(errorHandler)

module.exports = app