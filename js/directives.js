var lauraServiceDirectives = angular.module('lauraServiceDirectives', []);

//click services link and scroll to what I do best
lauraServiceDirectives.directive('scrollOnClick', function($timeout){

	return{

		restrict:'A',
		link: function(scope, $elm){
			
			$elm.on('click', function(){ 

				$timeout( function(){

					$('#servicesLink').addClass('clicked');

					var scrollOffset = 200;

					if ($('html').hasClass('ios')) {
						scrollOffset = 440;
					}

					$('body').animate({
						scrollTop: $("#servicesSection").offset().top - scrollOffset
					}, 2000);

				}, 300);
			});
		}
	}

});
