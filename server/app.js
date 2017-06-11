// REQUIRING NPM MODULES
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// CREATE APP INSTANCE OF EXPRESS
const app = express()

// DEFINING ROUTES IN ROUTES FILE
const routerVizago = require('./routes/vizago')

// DEFINE VERIFY MIDDLEWARE
// const verifyVizago = require('./routes/middlewares/verifyvizago')

// DEFINING 'PUBLIC' FOLDER FOR STATIC DOCS
app.use(express.static(path.join(__dirname, '../public')))

// INVOKE VERIFY MIDDLEWARE
// app.use(verifyVizago)

// MIDDLEWARES FOR POST METHOD AND JSON HANDLING
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', routerVizago)


module.exports = app

