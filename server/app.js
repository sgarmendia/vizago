// REQUIRING NPM MODULES
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const uploadFolderPath = path.join( global.__base, process.env.UPLOAD_FOLDER )
const upload = multer({ dest: uploadFolderPath })
const uploadCloudinary = require('./routes/vizago/handlers/upload')

// CREATE APP INSTANCE OF EXPRESS
const app = express()

// DEFINING ROUTES IN ROUTES FILE
const routerVizago = require('./routes/vizago')

// DEFINING 'PUBLIC' FOLDER FOR STATIC DOCS
app.use(express.static(path.join(__dirname, '../public')))

// MIDDLEWARES FOR POST METHOD AND JSON HANDLING
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/upload', upload.single('file'), uploadCloudinary, (req, res) => {
  const { imageLink } = req
  res.status(200).json( { imageLink } );
})
app.use('/', routerVizago)


module.exports = app

