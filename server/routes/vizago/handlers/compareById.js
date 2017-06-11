const vizago = require('../../../models/vizago')

function compareById(req,res) {
 
  const { id } = req.params

  vizago.find( {timeStamp : id} )
    .then( msg => {

      res.json(msg)

    })
    .catch( err => {

      res.json(err)
      
    })

}

module.exports = compareById
