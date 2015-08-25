var lauraService = angular.module("lauraServiceApp", [
	'ngRoute',
	'lauraServiceControllers'
	]);

lauraService.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	when('/projects', {
		templateUrl: 'partials/homepage.html',
		controller: 'HomepageCtrl'

	}).
	when('/projects/:id', {

	}).
	when('/about', {


	}).
	when('/services', {


	}).
	otherwise({
	
		redirectTo:'/projects'
	});

}]);

