function adminController($scope, Upload, vizagoService, ) {

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
                    const { name , auth } = $scope

                    vizagoService.storeUser({ source, name, auth })
                        .then(storeUserData => {

                            console.log(storeUserData)
                        })

                })
        }

    })()


}

module.exports = adminController
