function compareByIdController($scope, $routeParams, $http, vizagoService) {
    
  const timeStamp = $routeParams.id
  const url = `/comparePhoto/${timeStamp}`

      $http.get( url )
        .then( response => {
          console.log(response.data[0])

          $scope.source1 = response.data[0].source1
          $scope.source2 = response.data[0].source2

          const { source1, source2 } = $scope

        vizagoService.compareFace( { source1, source2 } )
              .then( compareData => {
                  $scope.compareData = compareData
                  console.log($scope.compareData)

                  const conf = compareData.confidence
                  const threshold = compareData.thresholds['1e-5']

                  const match = conf > threshold ? 'Match' : 'No Match'

                  $scope.match = match
          })

        })  

}

module.exports = compareByIdController