var lauraService = angular.module("lauraServiceApp", [
	'ngRoute',
	'lauraServiceControllers'
	]);

lauraService.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	when('/projects', {
		templateUrl: 'partials/homepage.html',
		controller: 'HomepageCtrl'

	}).//Add the individual page here!
	otherwise({
		redirectTo:'/projects'
	});

}]);

