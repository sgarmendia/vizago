const express = require('express')
const router = express.Router()

// DEFINE HANDLER FOR REQUESTING PHOTO ANALYSIS
const analyse = require('./handlers/analyse')

router.get('/analyse', analyse)


module.exports = router