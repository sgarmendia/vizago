function compareController($scope, Upload, vizagoService) {
      
(function() {

// FUNCTIONS FOR IMAGE 1

    $scope.fileSelected1 = (files) => {
      if (files && files.length) {
        $scope.file1 = files[0];
      }
    }

    $scope.uploadFile1 = function(){
      const url = '/upload' //node.js route
      const file = $scope.file1
      Upload.upload({ url, file })
        .success( ({imageLink}) => {

            $scope.imageLink1 = imageLink 

            console.log(imageLink)

            $scope.source1 = imageLink

        })
    }

// FUNCTIONS FOR IMAGE 2

    $scope.fileSelected2 = (files) => {
      if (files && files.length) {
        $scope.file2 = files[0];
      }
    }

    $scope.uploadFile2 = function(){
      const url = '/upload' //node.js route
      const file = $scope.file2
      Upload.upload({ url, file })
        .success( ({imageLink}) => {

            $scope.imageLink2 = imageLink 

            console.log(imageLink)

            $scope.source2 = imageLink

        })
    }

})()


    $scope.compareUrl = () => {

        const { source1, source2 } = $scope
        const type = 'compare'
        const timeStamp = new Date().valueOf()
        const address = `/comparePhoto/${timeStamp}`
        $scope.address = `https://vizago.herokuapp.com/#!/comparePhoto/${timeStamp}`
        
        vizagoService.compareFace( { source1, source2 } )
            .then( compareData => {
                $scope.compareData = compareData
                console.log($scope.compareData)

                const conf = compareData.confidence
                const threshold = compareData.thresholds['1e-5']

                const match = conf > threshold ? 'Match' : 'No Match'

                $scope.match = match
        })  

        vizagoService.storeAnalysis( { type, source1, source2, address, timeStamp } )
            .then( console.log )

    }
    
    $scope.submit = function() {
      if ($scope.form.file.$valid && $scope.file) {
        $scope.upload($scope.file);
      }
    };
}

module.exports = compareController