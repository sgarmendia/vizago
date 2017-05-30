var request = require('request')

function analyse (req, res) {

    // const { url } = req.body
  console.log('analyse running')
  var options = {
     url: 'https://api-us.faceplusplus.com/facepp/v3/face/analyze?api_key=sMTsq5eWZY-zpF0-yCr5XACBtClsfOvg&api_secret=Br-Og55C1c4lSuuxKDOAqcS9bpLF1SHg&face_tokens=0ed99159cbecb5dc05baea8b30230e29&return_landmark=1&return_attributes=gender,age,smiling,headpose,facequality,blur,eyestatus,ethnicity',
  }
  //   headers: {
  //     'app_id': '16b0caaf',
  //     'app_key': '51b073adf8709fa55caed715ee4adfd8'
  //   }
  // }
    
  // function callback(error, response, body) {

  //   // if (!error && response.statusCode == 200) {
  //     console.log('callback running')
  //     // var info = JSON.parse(body)
  //     console.log(body)

  //   // }
  // }
  
  request.post(options, function(err,httpResponse,body){

   var info = JSON.parse(body)
  console.log(info)

  })

  // request(url, callback)

}

module.exports = analyse