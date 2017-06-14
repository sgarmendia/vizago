var rp = require('request-promise')
const vizagoUser = require('../../../models/vizagoUser')

function storeuser(req, res) {

    const { source, name, auth } = req.body

    const tokenRequest = {
        method: 'POST',
        url: 'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=sMTsq5eWZY-zpF0-yCr5XACBtClsfOvg&api_secret=Br-Og55C1c4lSuuxKDOAqcS9bpLF1SHg&image_url=' + source,
        headers: {},
        json: true
    }

    rp(tokenRequest)
        .then(function(data) {

            const token = data.faces[0].face_token

            const addRequest = {
                method: 'POST',
                url: 'https://api-us.faceplusplus.com/facepp/v3/faceset/addface?api_key=sMTsq5eWZY-zpF0-yCr5XACBtClsfOvg&api_secret=Br-Og55C1c4lSuuxKDOAqcS9bpLF1SHg&outer_id=sky&face_tokens=' + token,
                headers: {},
                json: true
            }

            rp(addRequest)
                .then(function(addData) {

                    // res.json(addData)

                    const newvizagoUser = new vizagoUser({ name, token, auth , image : source })

                    newvizagoUser.save()
                        .then(msg => {
                            res.json(msg)
                        })
                        .catch(err => {
                            res.json(err)
                        })

                })

        })
        .catch(function(err) {
            res.end('Error on request')
        })




}

module.exports = storeuser
