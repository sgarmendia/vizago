function loginController($scope, Upload) {

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
        .success( ({imageLink}) => $scope.imageLink = imageLink )
    }

  

})()

}

    module.exports = loginController
