'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');

angular.module('app', ["ngRoute"])
	.config(function($routeProvider, $locationProvider){
		$routeProvider.when('/',
	        {
	            templateUrl:'/client_js/home.html',
	            controller:'HomeController'
	        })

			.when('/reg',
	        {
	            templateUrl:'/client_js/reg.html',
	            controller:'RegController'
	        })

	        .when('/login',
	        {
	            templateUrl:'/client_js/login.html',
	            controller:'LoginController'
	        })

		$locationProvider.html5Mode(true);
	});

require('./controllers/LoginController');
require('./controllers/RegistrationController');
require('./controllers/HomeController');
