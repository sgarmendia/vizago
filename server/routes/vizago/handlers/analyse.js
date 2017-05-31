var rp = require('request-promise')

function analyse (req, res) {

  console.log('analysis running')

  const { source } = req.body

  //const source = 'https://s-media-cache-ak0.pinimg.com/236x/92/4d/7e/924d7efc344d05dce49c5887597549c1.jpg'

  // PARAMETER TO SHOW FACE LANDMARKS - SET AT 0 (DEFAULT) FOR SIMPLER JSON
  const landmarks = 1
  
  var tokenRequest = {
      method: 'POST',
      url: 'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=sMTsq5eWZY-zpF0-yCr5XACBtClsfOvg&api_secret=Br-Og55C1c4lSuuxKDOAqcS9bpLF1SHg&image_url=' + source,
      headers: {
        //'app_id': '16b0caaf',
        //'app_key': '51b073adf8709fa55caed715ee4adfd8'
      },
      json: true 
  }

  let token, att

  rp(tokenRequest)
      .then(function (data) {
          
          token = data.faces[0].face_token
          
          var biometricRequest = {
            method: 'POST',
            url: 'https://api-us.faceplusplus.com/facepp/v3/face/analyze?api_key=sMTsq5eWZY-zpF0-yCr5XACBtClsfOvg&api_secret=Br-Og55C1c4lSuuxKDOAqcS9bpLF1SHg&face_tokens=' + token + '&return_landmark=' + landmarks + '&return_attributes=gender,age,smiling,headpose,facequality,blur,eyestatus,ethnicity',
            json: true 
          }

          rp(biometricRequest)
              .then(function (bioData) {
          
                  // console.log(bioData.faces[0].attributes)
                  att = bioData.faces[0].attributes
                  res.render('index.pug' , { att })

          })

      })
      .catch(function (err) {
           console.log('Error on request')
      })

// res.end('End of analysis')

}

module.exports = analyse