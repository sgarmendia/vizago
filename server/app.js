// REQUIRING NPM MODULES
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// DEFINING ROUTES IN ROUTES FILE
const routerVizago = require('./routes/vizago')

//DEFINING PRODUCTION ENVIROMENT PARAMETERS
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = process.env.PORT

// DEFINE VERIFY MIDDLEWARE
// const verifyVizago = require('./routes/middlewares/verifyvizago')

// CREATE APP INSTANCE OF EXPRESS
const app = express()

// DEFINING PUG AS VIEW ENGINE 
app.set('view engine', 'pug')

// DEFINING 'PUBLIC' FOLDER FOR STATIC DOCS
app.use(express.static(path.join(__dirname, '../public')))

// INVOKE VERIFY MIDDLEWARE
// app.use(verifyVizago)

// MIDDLEWARES FOR POST METHOD AND JSON HANDLING
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/', (req, res) => res.render('index.pug'))
app.use('/', routerVizago)

app.listen(PORT, console.log(`Active PORT: ${PORT}`))

