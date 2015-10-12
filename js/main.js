$(document).ready(function(){	

	//run underline on page load
	underLineCurrent();

    setHeadSpace();

	//switches underlined link on url change
	$(window).on('hashchange', function(e){

		underLineCurrent();

	});

    //When resizing the window
     $(window).resize( function(){

        setHeadSpace();

    });




	//header code
	var previousScroll = 0,
    headerOrgOffset = $('#header').height();

	$('#header-wrap').height($('#header').height());


	$(window).scroll(function () {


    //sets head slide up, debounces to make more efficient
    debounce(headerSlide(), 250);

    //Adds Scrolled class to nav when moved
    if(Math.round($(window).scrollTop()) > 120) {

    	$('#header-wrap').addClass('scrolled');
    	$('.iconSpan').addClass('scrolled');
    	$('#icon').addClass('scrolled');
    	$('#navSide').addClass('scrolled');
    	$('#header').addClass('scrolled');

    	//changes the icon to black when scrolled
    	$('#icon').attr('src', 'img/icon/LauraServiceIconBlack.svg');
		$('.navLinksA').css('color', '#707070');
    	
    }
    else {
    	$('#header-wrap').removeClass('scrolled');
    	$('.iconSpan').removeClass('scrolled');
    	$('#icon').removeClass('scrolled');
    	$('#navSide').removeClass('scrolled');
    	$('#header').removeClass('scrolled');

    	//if it is clear nav bar, make it white.
    	if( $('#header-wrap.clear').length)
    	{
    		$('#icon').attr('src', 'img/icon/LauraServiceIconWhite.svg');
    		$('.navLinksA').css('color', 'white');

    	}
    }

});

    
    //determines height of header and sets an appropriate head size

    function setHeadSpace(){

        var winHeight = $(window).height();

        winHeight = .95 * winHeight;

        if(winHeight < 300) {

            winHeight = 300;
        }


        $("#homepageHead").css("height", winHeight + "px" );

    }

    //check for Location hash and underline link
    function underLineCurrent()
    {
        var currentHash = location.hash.substring(1);

        //cuts the slash from the returned string
        currentHash = currentHash.slice(1);

        currentHash = currentHash.split('/');
        currentHash = currentHash[0];

        //underline remover
        underLineRemover();

        //adds link to the name to match the id of the 
        currentHash = currentHash + "Link";
        $('#' + currentHash).css("border-bottom", "1px solid #59ff89").addClass("active");

    }

    //cycles through listOfLinks amd removes the underline
    function underLineRemover()
    {
        //list of links
        var listOfLinks = ['projects', 'about', 'services'];

        //go through list and remove css
        for(var i = 0; i < listOfLinks.length; i++)
        {
            listOfLinks[i] = listOfLinks[i] + 'Link';
            $('#' + listOfLinks[i]).css("border-bottom", "none").removeClass("active");
        }
    }

        function headerSlide() {

            var currentScroll = $(this).scrollTop();
            if (currentScroll > headerOrgOffset) {
                if (currentScroll > previousScroll) {
                    $('#header-wrap').slideUp();
                } 
                else {
                    $('#header-wrap').slideDown();
                }
            }       
            else {
                $('#header-wrap').slideDown();
            }
            previousScroll = currentScroll;
        }



    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};




});