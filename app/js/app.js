var lauraService = angular.module("lauraServiceApp", [
	'ngRoute',
	'lauraServiceControllers'
	]);

lauraService.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	when('/', {
		templateUrl: 'partials/homepage.html',
		controller: 'HomepageCtrl'

	}).
	otherwise({
		redirecTo:'/'
	});

}]);

