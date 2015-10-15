var lauraServiceDirectives = angular.module('lauraServiceDirectives', []);

//click services link and scroll to what I do best
lauraServiceDirectives.directive('scrollOnClick', function(){

	return{

		restrict:'A',
		link: function(scope, $elm){
			$elm.on('click', function(){

				$('body').animate({
					scrollTop: $("#servicesSection").offset().top
				}, 2000);
			});
		}
	}

});

//click services link and scroll to what I do best
/*
lauraServiceDirectives.directive('scrollOnLoad', function(){

	return {
		restrict: 'A',
		link: function(scope, $elm){

			$elm.ready(function(){

				if( $('#servicesLink').hasClass('active') ){
					$('body').animate({
						scrollTop: $("#servicesSection").offset().top
					}, 2000);

				}
			});
		}
	}
});

*/