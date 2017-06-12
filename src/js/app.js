const angular = require('angular')
const angularRoute = require('angular-route')
require('angular-socialshare')
require('angularjs-gauge')



const homeController = require('./controllers/homeController')
const analysisController = require('./controllers/analysisController')
const compareController = require('./controllers/compareController')
const compareByIdController = require('./controllers/compareByIdController')
const vizagoService = require('./services/vizagoService')

angular.module('vizagoApp', [ 'angularjs-gauge', '720kb.socialshare', angularRoute ])

	.factory('vizagoService', vizagoService)

	.controller('homeController', homeController)
  .controller('analysisController', analysisController)
  .controller('compareController', compareController)
  .controller('compareByIdController', compareByIdController)

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
        .when('/comparePhoto/:id', {
          templateUrl: '/templates/comparePhoto.html',
          controller: 'compareByIdController'
        })
        .when('/login', {
          templateUrl: '/templates/login.html'
        })
  })
