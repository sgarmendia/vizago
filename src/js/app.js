const angular = require('angular')
const angularRoute = require('angular-route')
require('angularjs-gauge')


const homeController = require('./controllers/homeController')
const analysisController = require('./controllers/analysisController')
const compareController = require('./controllers/compareController')
const vizagoService = require('./services/vizagoService')

angular.module('vizagoApp', [ 'angularjs-gauge' , angularRoute ])

	.factory('vizagoService', vizagoService)

	.controller('homeController', homeController)
  .controller('analysisController', analysisController)
  .controller('compareController', compareController)

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
          templateUrl: '/templates/comparePhoto.html',
          controller: 'compareController'
        })
        .when('/login', {
          templateUrl: '/templates/login.html'
        })
  })
