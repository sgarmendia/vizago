function compareController($scope, faceAnalysisService) {
      
    $scope.compareUrl = () => {

        const { source1, source2 } = $scope
        
        faceAnalysisService.compareFace( { source1, source2 } )
            .then( compareData => {
                $scope.compareData = compareData
                console.log($scope.compareData)
        })  
    }
}

module.exports = compareController