const mongoose = require('mongoose')


require('dotenv').load()

global.__base = __dirname + '/server/'

const app = require('./server/app')

//DEFINING PRODUCTION ENVIROMENT PARAMETERS
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const DB_URI = process.env.DB_URI
const PORT = process.env.PORT || 3000

mongoose.Promise = Promise
mongoose.connect(DB_URI)

// db.open(DB_URI)
app.listen(PORT)

console.log(`Listening on port ${PORT}...`)