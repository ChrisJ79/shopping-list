
/*function for adding items to the shopping list using the add-to list button (maybe?) and/or enterkey */
function addItem() {

	var itemValue = $('#addItemValue').val();
	
	var row = $('<li><button class="checkbox">&#x2713;</button><span>' + itemValue + '</span><button class="remove">X</button></li>');

	$('.grocery-items').append(row);

}

function crossOut() {

}


function removeItem() {

}

function clearAll() {

}


$(document).ready(function() {
	/* click on the add to list button, id is "add-button", the action is to add the item */
	$('#add-button').on('click', addItem);
	/* click on the remove all button, class is "remove-all", the action is to Clear the entire List  */
	$('.remove-all').on('click', clearAll);
	
 });

	/* click on the check box,  class is "checkbox", the action is to make a checkmark and crossout the line */
$(document).on('click', '.checkbox', crossOut);
	/* click on the remove button,  class is "remove", the action is to remove the item completely*/
$(document).on('click', '.remove', removeItem);	
