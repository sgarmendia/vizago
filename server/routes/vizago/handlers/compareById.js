const vizago = require('../../../models/vizago')

function compareById(req,res) {

  const { ts } = req.params
  console.log('req params: ' + req.params)
  console.log('this is ts: '+ ts)

  vizago.find( {timeStamp : ts} )
    .then( msg => {
      console.log(msg)
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = compareById
