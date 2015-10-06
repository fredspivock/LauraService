$(document).ready(function(){	

	//run underline one page load
	underLineCurrent();

    setHeadSpace();

	//switches underlined link on url change
	$(window).on('hashchange', function(e){

		underLineCurrent();
	});

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
		$('#' + currentHash).css("border-bottom", "1px solid #59ff89");

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
			$('#' + listOfLinks[i]).css("border-bottom", "none");
		}
	}


	//header code
	var previousScroll = 0,
    headerOrgOffset = $('#header').height();

	$('#header-wrap').height($('#header').height());


	$(window).scroll(function () {
   		var currentScroll = $(this).scrollTop();
    	if (currentScroll > headerOrgOffset) {
        	if (currentScroll > previousScroll) {
            	$('#header-wrap').slideUp();
        	} 
        	else {
            	$('#header-wrap').slideDown();
        	}
    } 		else {
            $('#header-wrap').slideDown();
    }
    previousScroll = currentScroll;

    //Adds Scrolled class to nav when moved
    if(Math.round($(window).scrollTop()) > 100) {

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

    //if scrolled change icon to black
});

    
    //determines height of header and sets an appropriate head size

    function setHeadSpace(){

        var winHeight = $(window).height();

        console.log(winHeight);

        winHeight = .95 * winHeight;

        $("#homepageHead").css("height", winHeight + "px" );

    }


    $(window).resize( function(){

        setHeadSpace();

    }



    );


});