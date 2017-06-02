var rp = require('request-promise')

function analysewc (req, res) {

  console.log('analysiswc running')

  const { data } = req.body
  
  // PARAMETER TO SHOW FACE LANDMARKS - SET AT 0 (DEFAULT) FOR SIMPLER JSON
  // const landmarks = 1
  
  // var tokenRequest = {
  //     method: 'POST',
  //     url: 'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=sMTsq5eWZY-zpF0-yCr5XACBtClsfOvg&api_secret=Br-Og55C1c4lSuuxKDOAqcS9bpLF1SHg&image_base64=' + photo,
  //     headers: {
  //       //'app_id': '16b0caaf',
  //       //'app_key': '51b073adf8709fa55caed715ee4adfd8'
  //     },
  //     json: true 
  // }

  // let token, att, smile, conf, blurIndex

  // rp(tokenRequest)
  //     .then(function (data) {
          
  //         token = data.faces[0].face_token
          
  //         var biometricRequest = {
  //           method: 'POST',
  //           url: 'https://api-us.faceplusplus.com/facepp/v3/face/analyze?api_key=sMTsq5eWZY-zpF0-yCr5XACBtClsfOvg&api_secret=Br-Og55C1c4lSuuxKDOAqcS9bpLF1SHg&face_tokens=' + token + '&return_landmark=' + landmarks + '&return_attributes=gender,age,smiling,headpose,facequality,blur,eyestatus,ethnicity',
  //           json: true 
  //         }

  //         rp(biometricRequest)
  //             .then(function (bioData) {
                  
  //                 att = bioData.faces[0].attributes

  //                 if (att.smile.value > att.smile.threshold) {
  //                   smile = 'yes'
  //                 } else {
  //                   smile = 'no'
  //                 }

  //                 conf = Math.floor( (att.facequality.value / att.facequality.threshold ) * 100) / 100

  //                 let bb, mb, gb

  //                 bb = att.blur.blurness.value / att.blur.blurness.threshold
  //                 mb = att.blur.motionblur.value / att.blur.motionblur.threshold
  //                 gb = att.blur.gaussianblur.value / att.blur.gaussianblur.threshold

  //                 blurIndex = Math.round(( ( bb + mb + gb) / 3 ) * 10000) /100

  //                 res.render('index.pug' , { att , source ,smile, conf, blurIndex })

  //         })

  //     })
  //     .catch(function (err) {
  //          res.end('Error on request')
  //     })


}

module.exports = analysewc