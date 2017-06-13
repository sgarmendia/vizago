const express = require('express')
const router = express.Router()

// DEFINE HANDLER FOR REQUESTING PHOTO ANALYSIS
const analyse = require('./handlers/analyse')
const storeanalysis = require('./handlers/storeanalysis')
const compare = require('./handlers/compare')
const analysesb = require('./handlers/analysesb')
const upload = require('./handlers/upload')
const compareById = require('./handlers/compareById')


router.post('/analyse', analyse)
router.post('/storeanalysis', storeanalysis)
router.post('/compare', compare)
router.post('/analysesb', analysesb)
router.post('/upload', upload)
router.get('/comparePhoto/:id', compareById)


module.exports = router