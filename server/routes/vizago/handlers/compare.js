var rp = require('request-promise')

function compare (req, res) {

  const { source1, source2 } = req.body
 
  const compareRequest = {
      method: 'POST',
      url: 'https://api-us.faceplusplus.com/facepp/v3/compare?api_key=sMTsq5eWZY-zpF0-yCr5XACBtClsfOvg&api_secret=Br-Og55C1c4lSuuxKDOAqcS9bpLF1SHg&image_url1=' + source1 + '&image_url2=' + source2,
      headers: {},
      json: true 
  }

  rp(compareRequest)
      .then(function (compareData) {
          
      res.json(compareData)

      })
      .catch(function (err) {

          res.end('Error on request')

      })
}

module.exports = compare