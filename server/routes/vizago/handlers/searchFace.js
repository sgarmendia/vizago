const vizagoUser = require('../../../models/vizagoUser')
var rp = require('request-promise')

function searchFace (req, res) {

  console.log('searchFace running')

  const { source } = req.body
  
  const searchRequest = {
        method: 'POST',
        url: 'https://api-us.faceplusplus.com/facepp/v3/search?api_key=sMTsq5eWZY-zpF0-yCr5XACBtClsfOvg&api_secret=Br-Og55C1c4lSuuxKDOAqcS9bpLF1SHg&image_url=' + source + '&outer_id=sky',
        json: true 
        }

  rp(searchRequest)
        .then(function (searchData) {
          
          const token = searchData.results[0].face_token
          const conf = searchData.results[0].confidence
          const thr = searchData.thresholds['1e-5']

          if (conf > thr) {

           vizagoUser.find( { token } )
              .then( msg => {

                res.json( { msg , conf , thr } )

              })
              .catch( err => {

                res.json(err)
                
              })

          } else {

          res.send('false')

          }
          
        })
        .catch(function (err) {

          res.end('Error on request')

        })

}

module.exports = searchFace