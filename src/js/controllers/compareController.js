function compareController($scope, faceAnalysisService) {
      
    $scope.compareUrl = () => {

        const { source1, source2 } = $scope
        
        faceAnalysisService.compareFace( { source1, source2 } )
            .then( compareData => {
                $scope.compareData = compareData
                console.log($scope.compareData)

                const conf = compareData.confidence
                const threshold = compareData.thresholds['1e-5']

                const match = conf > threshold ? 'Match' : 'No Match'

                $scope.match = match
        })  
    }
}

module.exports = compareController