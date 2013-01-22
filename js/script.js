/* Popup
*/

function showPopup(element){
	$('#light').show('slow');
	$('#fade').show('slow');
	$('#close').show('slow');

	var popUp = document.getElementById('light') ;
	popUp.style.backgroundImage = "";
	
	/*var closeButton = '<div id="close" class="close" onclick="hidePopup()"><img src="img/closeButton.png"></div>';
	var srcHTML = '<iframe src="Demos/' + element.id + '"></iframe>';*/

	var divToDisplay = element.id + ".html";
	document.getElementById(divToDisplay).style.display = "block";
	
	//alert(element.id);
}

function hidePopup(){
	$('#light').hide('slow');
	$('#fade').hide('slow');
	$('#close').hide('slow');
	$('#light>div').css('display','none');
}

/* End Popup */