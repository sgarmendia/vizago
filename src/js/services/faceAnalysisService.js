function faceAnalysisService ($http) {

	function faceAnalysis() {
		return $http.get('/analyse')
			.then( response => response.data )
	}

	return { faceAnalysis }

}

module.exports = faceAnalysisService