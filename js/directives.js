var lauraServiceDirectives = angular.module('lauraServiceDirectives', []);

//click services link and scroll to what I do best
lauraServiceDirectives.directive('scrollOnClick', function($timeout){

	return{

		restrict:'A',
		link: function(scope, $elm){
			
			$timeout( $elm.on('click', function(){

				$('#servicesLink').addClass('clicked');

				$('body').animate({
					scrollTop: $("#servicesSection").offset().top,
				}, 2000);
			}), 300);
		}
	}

});
