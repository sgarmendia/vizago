function analysisController($scope, Upload, vizagoService) {

    (function() {

        $scope.fileSelected = (files) => {
            if (files && files.length) {
                $scope.file = files[0];
            }
        }

        $scope.uploadFile = function() {
            const url = '/upload' //node.js route
            const file = $scope.file
            Upload.upload({ url, file })
                .success(({ imageLink }) => {
                    $scope.imageLink = imageLink
                    console.log(imageLink)

                    const source = imageLink

                    vizagoService.faceAnalysis({ source })
                        .then(faceData => {
                            $scope.faceData = faceData
                            console.log($scope.faceData)
                        })

                })
        }

    })()

}

module.exports = analysisController
