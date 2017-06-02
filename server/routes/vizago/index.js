const express = require('express')
const router = express.Router()

// DEFINE HANDLER FOR REQUESTING PHOTO ANALYSIS
const analyse = require('./handlers/analyse')
const analysewc = require('./handlers/analysewc')
const analysek = require('./handlers/analysek')
const analysesb = require('./handlers/analysesb')


router.post('/analyse', analyse)
router.post('/analysewc', analysewc)
router.post('/analysek', analysek)
router.post('/analysesb', analysesb)


module.exports = router