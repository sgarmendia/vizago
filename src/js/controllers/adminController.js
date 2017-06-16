function adminController($scope, Upload, vizagoService ) {

    (() => {

// FUNCTIONS FOR REGISTER
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

                            if ( storeUserData._id ) {
                            
                            $scope.reg = true

                        } else {

                            $scope.reg = false
                            
                        }
                            console.log(storeUserData)
                        })

                })
        }

//FUNCTIONS FOR EDITING

        $scope.fileSelectedEdit = (files) => {
            if (files && files.length) {
                $scope.fileEdit = files[0];
            }
        }

        $scope.uploadFileEdit = function() {

            const url = '/upload' //node.js route
            const file = $scope.fileEdit

            Upload.upload({ url, file })
                .success(({ imageLink }) => {
                    $scope.imageLinkEdit = imageLink
                    console.log(imageLink)

                    const source = imageLink
                    const auth = $scope.authEdit

                    vizagoService.editUser({ source, auth })
                        .then(editUserData => {

                        if ( editUserData === 'false' ) {
                            
                            $scope.success = false

                        } else {

                            $scope.success = true
                            
                        }

                        console.log(editUserData)
                        
                        })

                })
        }


    })()


}

module.exports = adminController
