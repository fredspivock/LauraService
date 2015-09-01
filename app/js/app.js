var lauraService = angular.module("lauraServiceApp", [
	'ngRoute',
	'lauraServiceControllers',
	'ngSanitize'
	
	]);

lauraService.config(['$routeProvider', function($routeProvider){

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


	}).
	when('/services', {


	}).
	otherwise({
	
		redirectTo:'/projects'
	});

}]);

