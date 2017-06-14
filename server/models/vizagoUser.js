const mongoose = require('mongoose');
const collection = 'vizagoUsers'

var vizagoUserSchema = new mongoose.Schema({

  name: String,
  token: String,
  auth: {
  	type: Boolean,
  	default: true
  },
  image: { 
    type: String,
    default: 'none'
  }
}, { collection })

module.exports = mongoose.model('vizagoUser', vizagoUserSchema);