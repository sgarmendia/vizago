var rp = require('request-promise')
const vizagoUser = require('../../../models/vizagoUser')

function edituser(req, res) {

    const { source, auth } = req.body

    const searchRequest = {
        method: 'POST',
        url: 'https://api-us.faceplusplus.com/facepp/v3/search?api_key=sMTsq5eWZY-zpF0-yCr5XACBtClsfOvg&api_secret=Br-Og55C1c4lSuuxKDOAqcS9bpLF1SHg&image_url=' + source + '&outer_id=sky',
        json: true 
        }

    rp(searchRequest)
        .then(function(data) {

            const token = data.results[0].face_token
            const conf = data.results[0].confidence
            const thr = data.thresholds['1e-5']

            if (conf > thr) {

                vizagoUser.update( { token }, {$set: { auth }} )
                    .then(msg => {
                        res.json(msg)
                    })
                    .catch(err => {
                        res.json(err)
                    })
                    
            } else {

              res.send('false')

            }

        })
        .catch(function(err) {
            res.end('Error on request')
        })

}

module.exports = edituser
