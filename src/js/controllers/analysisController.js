function analysisController($scope, vizagoService) {
      
    $scope.analyseUrl = () => {

        const { source } = $scope
        
        vizagoService.faceAnalysis( { source } )
            .then( faceData => {
                $scope.faceData = faceData
                console.log($scope.faceData)
        })  
    }
}

module.exports = analysisController