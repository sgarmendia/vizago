const vizago = require('../../../models/vizago')

function storeanalysis(req,res) {

  const { type, source, source1, source2, address, timeStamp } = req.body

  const newvizago = new vizago({ type, source, source1, source2, address, timeStamp })

  newvizago.save()
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = storeanalysis
