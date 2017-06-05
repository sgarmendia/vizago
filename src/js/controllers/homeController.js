function homeController($scope, faceAnalysisService) {


	faceAnalysisService.faceAnalysis()
		.then(faceData => $scope.faceData = faceData)

}

module.exports = homeController