/*contollers for Laura Sercice*/

var lauraServiceControllers = angular.module('lauraServiceControllers', []);


//Home page Controller
lauraServiceControllers.controller('HomepageCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('projects/homepageProjects.json').success(function(data){

			$scope.projects = data;
		});

	}]);
