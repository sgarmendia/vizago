function compareController($scope, vizagoService) {
      
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
}

module.exports = compareController