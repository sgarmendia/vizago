var rp = require('request-promise')

function analysesb (req, res) {

  console.log('analysis running')

  const { source } = req.body
  
  // PARAMETERS TO SHOW FACE ATTRIBUTES AND FEATUREPOINTS
  const attributes = 'all'
  const featurepoints = 'false'
  
  var biometricRequest = {
      method: 'POST',
      url: 'http://api.skybiometry.com/fc/faces/detect.json?api_key=8c0a4499db5943979f931e3dde35def5&api_secret=60de8f90aeb74b118813a9a87352732f&urls='+ source +'&attributes=all&detect_all_feature_points=false',
      headers: {},
      json: true 
  }

  let att, lie

       
  rp(biometricRequest)
      .then(function (bioData) {

          att = bioData.photos[0].tags[0].attributes
          
          if (att.fear.value === true && att.sadness.value === true) {
                 lie = 10 * (att.fear.confidence + att.sadness.confidence) / 2
                     
               } else if (att.fear.value === true && att.disgust.value === true) {
                 lie = 10 * (att.fear.confidence*0.6 + att.disgust.confidence*0.4) / 2

               } else if (att.anger.value === true && att.disgust.value === true) {
                 lie = 10 * (att.anger.confidence*0.2 + att.disgust.confidence*0.8) / 2

               } else { 
                 lie = 10 * (att.anger.confidence*0.2 + att.disgust.confidence*0.3 + att.fear.confidence*0.3 + att.sadness.confidence*0.2) / 4 
          }

          att.lie = Math.floor(lie * 100) / 100

          res.json(att)
     
  })

  .catch(function (err) {
          res.end('Error on request')
  })


}

module.exports = analysesb