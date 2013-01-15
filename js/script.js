function showPopup(element){
	$('#light').show('slow');
	$('#fade').show('slow');
	$('#close').show('slow');

	
	var closeButton = '<div id="close" class="close" onclick="hidePopup()"><img src="img/closeButton.png"></div>';
	var srcHTML = '';

	popupHTML = closeButton + srcHTML ;
	$('#light').html(popupHTML);

	//alert(element.id);
}

function hidePopup(){
	$('#light').hide('slow');
	$('#fade').hide('slow');
	$('#close').hide('slow');
}
