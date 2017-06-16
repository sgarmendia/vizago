function compareByIdController($scope, $routeParams, $http, vizagoService) {
    
  const timeStamp = $routeParams.id
  const url = `/comparePhoto/${timeStamp}`

      $http.get( url )
        .then( response => {
          console.log(response.data[0])

          $scope.imageLink1 = response.data[0].source1
          $scope.imageLink2 = response.data[0].source2

          const source1 = $scope.imageLink1
          const source2 = $scope.imageLink2

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