function vizagoService ($http) {

  function faceAnalysis(data) {

    return $http.post('/analysesb', data )
      .then( response => response.data )
  }

  function compareFace(data) {

    return $http.post('/compare', data )
      .then( response => response.data )
  }

  function storeAnalysis(data) {

    return $http.post('/storeanalysis', data )
      .then( response => response.data )
  }


  return { faceAnalysis, 
           compareFace, 
           storeAnalysis }

}

module.exports = vizagoService