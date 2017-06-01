const express = require('express')
const router = express.Router()

// DEFINE HANDLER FOR REQUESTING PHOTO ANALYSIS
const analyse = require('./handlers/analyse')
const analysewc = require('./handlers/analysewc')

router.post('/analyse', analyse)
router.post('analysewc', analysewc)


module.exports = router