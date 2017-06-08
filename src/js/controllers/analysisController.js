function analysisController($scope, faceAnalysisService) {
      
    $scope.analyseUrl = () => {

        const { source } = $scope
        
        faceAnalysisService.faceAnalysis( { source } )
            .then( faceData => {
                $scope.faceData = faceData
                console.log($scope.faceData)
        })  
    }
}

module.exports = analysisController