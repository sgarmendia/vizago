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
          
          // res.json(searchData)

          const token = searchData.results[0].face_token

           vizagoUser.find( { token } )
              .then( msg => {

                res.json(msg)

              })
              .catch( err => {

                res.json(err)
                
              })

        })
        .catch(function (err) {

          res.end('Error on request')

        })

}

module.exports = searchFace