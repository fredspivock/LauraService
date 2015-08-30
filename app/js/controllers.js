/*contollers for Laura Sercice*/

var lauraServiceControllers = angular.module('lauraServiceControllers', []);


//Home page Controller
lauraServiceControllers.controller('HomepageCtrl', ['$scope', '$http',
	function($scope, $http){

		//makes opaue
		var  opaqueNav = function(){

			$('#header-wrap').removeClass('clear');
			$('.navLinksA').removeClass('clear');
			$('#icon').attr('src', 'img/icon/LauraServiceIcon.gif');
			$('.navLinksA').css('color', '#707070');

		}

		opaqueNav();

		$http.get('projects/homepageProjects.json').success(function(data){

			$scope.projects = data;
		});

	}]);

lauraServiceControllers.controller('ProjectCtrl', ['$scope', '$http', '$routeParams',  
	function($scope, $http, $routeParams){


		//clears a navbar
		var  clearNav = function(){

			$('#header-wrap').addClass('clear');
			$('.navLinksA').addClass('clear');
			$('#icon').attr('src', 'img/icon/icon-white.gif');

		}

		clearNav();


		//Getting a individual
		$http.get('projects/' + $routeParams.id +'.json').success(function(data){

			$scope.projectSingle = data;
		});

		//For the More Work, gets main list
		$http.get('projects/homepageProjects.json').success(function(data){

			$scope.projects = data;
		});

}]);

//object containing helpers
var myHelper = myHelper || {};

myHelper.helpers = {

	underline: function(){

		var currentHash = location.hash.substring(1);

		//cuts the slash from the returned string
		currentHash = currentHash.slice(1);

		currentHash = currentHash.split('/');
		currentHash = currentHash[0];

		//underline remover
		//list of links
		var listOfLinks = ['projects', 'about', 'services'];

		//go through list and remove css
		for(var i = 0; i < listOfLinks.length; i++)
		{
			listOfLinks[i] = listOfLinks[i] + 'Link';
			$('#' + listOfLinks[i]).css("border-bottom", "none");
		}

		//adds link to the name to match the id of the 
		currentHash = currentHash + "Link";
		$('#' + currentHash).css("border-bottom", "3px solid #CCFFCC");
	},


};

lauraServiceControllers.controller('HelperCtrl', ['$scope', 
	function($scope){

			$scope.helpers = myHelper.helpers;

	}]);
