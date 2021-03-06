const angular = require('angular')
const angularRoute = require('angular-route')
require('ng-file-upload')
require('angular-socialshare')
require('angularjs-gauge')

const homeController = require('./controllers/homeController')
const analysisController = require('./controllers/analysisController')
const compareController = require('./controllers/compareController')
const compareByIdController = require('./controllers/compareByIdController')
const loginController = require('./controllers/loginController')
const adminController = require('./controllers/adminController')
const vizagoService = require('./services/vizagoService')

angular.module('vizagoApp', [ 'angularjs-gauge', '720kb.socialshare', 'ngFileUpload', angularRoute ])

	.factory('vizagoService', vizagoService)

	.controller('homeController', homeController)
  .controller('analysisController', analysisController)
  .controller('compareController', compareController)
  .controller('compareByIdController', compareByIdController)
  .controller('loginController', loginController)
  .controller('adminController', adminController)

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
          templateUrl: '/templates/login.html',
          controller: 'loginController'
        })
        .when('/admin', {
          templateUrl: '/templates/admin.html',
          controller: 'adminController'
        })
  })
