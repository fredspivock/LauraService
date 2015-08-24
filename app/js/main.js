$(document).ready(function(){	

	//run underline one page load
	underLineCurrent();



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

		//underline remover
		underLineRemover();

		//adds link to the name to match the id of the 
		currentHash = currentHash + "Link";
		$('#' + currentHash).css("border-bottom", "3px solid black");

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
			console.log(listOfLinks[i]);
			$('#' + listOfLinks[i]).css("border-bottom", "none");
		}
	}

});