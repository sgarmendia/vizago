const angular = require('angular')
const angularRoute = require("angular-route");

const homeController = require('./controllers/homeController')
const faceAnalysisService = require('./services/faceAnalysisService')

angular.module('vizagoApp', [ angularRoute ])
	.factory('faceAnalysisService', faceAnalysisService)
	.controller('homeController', homeController)
	.config( $routeProvider => {
    $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
          controller: 'homeController'
        })
        .when('/analysePhoto', {
          templateUrl: '/templates/analysePhoto.html'
          
        })
        // .when('/contact', {
        //   template: '<div id="contact"><h1>Contact page</h1></div>'
        // })
  })