const mongoose = require('mongoose');
const collection = 'vizagos'

var vizagoSchema = new mongoose.Schema({

  type: String,
  conf: Number,
  source: { 
    type: String,
    default: 'none'
  },
  source1: { 
    type: String,
    default: 'none'
  },
  source2: { 
    type: String,
    default: 'none'
  },
  address: String,
  timeStamp: Number,
}, { collection })

module.exports = mongoose.model('vizago', vizagoSchema);