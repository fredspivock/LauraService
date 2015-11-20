var lauraService = angular.module("lauraServiceApp", [
	'ngRoute',
	'lauraServiceControllers',
	'ngSanitize',
	'lauraServiceDirectives',
	'angular-loading-bar',
	'ngAnimate'
	
	]);

lauraService.config(['$routeProvider', 'cfpLoadingBarProvider', function($routeProvider, cfpLoadingBarProvider){

	cfpLoadingBarProvider.includeSpinner = false;
	
	$routeProvider.
	when('/projects', {
		templateUrl: 'partials/homepage.html',
		controller: 'HomepageCtrl'

	}).
	when('/projects/:id', {
		templateUrl:'partials/project.html',
		controller:'ProjectCtrl'
	}).
	when('/about', {

		templateUrl:'partials/about.html',
		controller:'AboutCtrl'

	}).
	when('/services', {

		templateUrl:'partials/about.html',
		controller:'AboutCtrl'

	}).
	otherwise({
	
		redirectTo:'/projects'
	});

}]);

