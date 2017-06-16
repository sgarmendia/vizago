function loginController($scope, Upload, vizagoService) {

(function() {

    $scope.fileSelected = (files) => {
      if (files && files.length) {
        $scope.file = files[0];
      }
    }

    $scope.uploadFile = function(){
      const url = '/upload' //node.js route
      const file = $scope.file
      Upload.upload({ url, file })
        .success( ({imageLink}) => {
            $scope.imageLink = imageLink 
            console.log(imageLink)

            const source = imageLink

        vizagoService.loginFace( { source } )
            .then( searchData => {

              $scope.data = {}

              if (searchData === 'false') {
                
                $scope.data.auth = 'unregistered'
                console.log($scope.data.auth)

              } else {

                $scope.data = searchData.msg[0] 
                $scope.conf = searchData.conf
                $scope.thr = searchData.thr

              }

                console.log(searchData)
            })

        })
    }

})()



}

    module.exports = loginController
