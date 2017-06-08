function faceAnalysisService ($http) {

	function faceAnalysis(data) {
         console.log('data in service is: ' + data)
		return $http.post('/analysesb', data )
			.then( response => response.data )
	}

	return { faceAnalysis }

}

module.exports = faceAnalysisService