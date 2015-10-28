/*contollers for Laura Sercice*/

var lauraServiceControllers = angular.module('lauraServiceControllers', ['ngSanitize']);


//Home page Controller
lauraServiceControllers.controller('HomepageCtrl', ['$scope', '$http',
	function($scope, $http){

		//makes opaue
		var  opaqueNav = function(){

			$('#header-wrap').removeClass('clear');
			$('#icon').attr('src', 'img/icon/LauraServiceIconBlack.svg');

		}

		var setHeaderSpaceHome = function () {


        	var winHeight = $(window).height();

        	winHeight = .95 * winHeight;

	        $("#homepageHead").css("height", winHeight + "px" );

		}

		opaqueNav();
		setHeaderSpaceHome();

		$http.get('projects/homepageProjects.json').success(function(data){

			$scope.projects = data;
		});

		//set view to top after load
		window.scrollTo(0, 0);

	}]);

lauraServiceControllers.controller('ProjectCtrl', ['$scope', '$http', '$routeParams',  
	function($scope, $http, $routeParams){


		//clears a navbar

		var seeMoreOpen =  false;

		var  clearNav = function(){

			$('#header-wrap').addClass('clear');
			$('#icon').attr('src', 'img/icon/LauraServiceIconWhite.svg');
		}

		clearNav();


		//Getting a individual
		$http.get('projects/' + $routeParams.id +'.json').success(function(data){

			$scope.projectSingle = data;
			$scope.description = data.description;

		});

		
		//function scrolls to page top
		$scope.toPageTop = function() {

			$("html, body").animate({

				scrollTop: 0,

			}, "slow");
		}


		//function See more Button

		$scope.seeMore = function() {

			if( seeMoreOpen === false){
				$('.hiddenSideBar').css('display', 'block');
				$('.seeMoreLink').html("See Less Awards");
				seeMoreOpen = true;
			}
			else if(seeMoreOpen === true) {

				$('.hiddenSideBar').css('display', 'none');
				$('.seeMoreLink').html("See More Awards");
				seeMoreOpen = false;
			}
				
		}





		//For the More Work, gets main list
		$http.get('projects/homepageProjects.json').success(function(data){

			$scope.projects = data;
		});


		//set view to top after load
		window.scrollTo(0, 0);

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
		$('#' + currentHash).css("border-bottom", "1px solid #59ff89").addClass("active");
	},

	};


//};

lauraServiceControllers.controller('HelperCtrl', ['$scope', 
	function($scope){

			$scope.helpers = myHelper.helpers;

	}]);


lauraServiceControllers.controller('AboutCtrl', ['$scope', '$http', '$location', '$anchorScroll', '$timeout',
	function($scope, $http, $location, $anchorScroll, $timeout){

		//makes opaue
		var  opaqueNav = function(){

			$('#header-wrap').removeClass('clear');
			$('#icon').attr('src', 'img/icon/LauraServiceIconBlack.svg');

		}

		var setHeaderSpaceAbout = function () {


        	var winHeight = $(window).height();

        	winHeight = .95 * winHeight;


	        $("#homepageHead").css("height", winHeight + "px" );

		}

		opaqueNav();

		setHeaderSpaceAbout();

		$http.get('projects/about.json').success(function(data){

			$scope.about = data;

		});

		//set view to top after load
		window.scrollTo(0, 0);


		
		$timeout(function() {

			//check if the link was pressed or url is set to "services"
			if( $('#servicesLink').hasClass('active') && !$('#servicesLink').hasClass('clicked') ){
			
				$anchorScroll("servicesSection");
  			}

  			if($('#servicesLink').hasClass('clicked') && $('#servicesLink').hasClass('active')) {
  				$('body').animate({
					scrollTop: $("#servicesSection").offset().top,
				}, 2000);
  			}

  		}, 300);


}]);