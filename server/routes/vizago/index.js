const express = require('express')
const router = express.Router()

// DEFINE HANDLER FOR REQUESTING PHOTO ANALYSIS
const analyse = require('./handlers/analyse')
const analysewc = require('./handlers/analysewc')
const compare = require('./handlers/compare')
const analysesb = require('./handlers/analysesb')


router.post('/analyse', analyse)
router.post('/analysewc', analysewc)
router.post('/compare', compare)
router.post('/analysesb', analysesb)


module.exports = router