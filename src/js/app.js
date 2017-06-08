const angular = require('angular')
const angularRoute = require('angular-route')
const angularjsgauge = require('angularjs-gauge')

const homeController = require('./controllers/homeController')
const analysisController = require('./controllers/analysisController')
const faceAnalysisService = require('./services/faceAnalysisService')

angular.module('vizagoApp', [ angularRoute, angularjsgauge ])

	.factory('faceAnalysisService', faceAnalysisService)

	.controller('homeController', homeController)
  .controller('analysisController', analysisController)

	.config( $routeProvider => {
    $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
          controller: 'homeController'
        })
        .when('/analysePhoto', {
          templateUrl: '/templates/analysePhoto.html',
          controller: 'analysisController'
        })
        .when('/comparePhoto', {
          templateUrl: '/templates/comparePhoto.html'
        })
        .when('/login', {
          templateUrl: '/templates/login.html'
        })
  })