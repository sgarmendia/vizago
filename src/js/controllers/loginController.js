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

                $scope.results = searchData.results

                $scope.conf = searchData.results[0].confidence

                $scope.threshold = $scope.checked ? searchData.thresholds['1e-4'] : searchData.thresholds['1e-5']

                console.log(searchData)
            })

        })
    }

})()



}

    module.exports = loginController
