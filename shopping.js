
/*function for adding items to the shopping list using the add-to list button and enterkey */
	function addItem() {

	var itemValue = $('#add-item-value').val();
	

	var row = $('<li><button class="checkbox" type="button"><i class="material-icons">check</i></button><span style="font-size: 24px;">' + itemValue + ' </span><button class="remove" type="button"><i class="material-icons">close</i></li>');

	$('.grocery-items').append(row);

	// itemValue = $('#add-item-value').val('');

}



function crossOut() {
	$(this).parent().toggleClass('cross-out');
}



function removeItem() {
	$(this).parent().remove();
}

function clearAll() {
	$('.grocery-items').empty();
}


$(document).ready(function() {
	/* click on the add to list button, id is "add-button", the action is to add the item */
	$('#add-button').on(	'click', addItem);
	/* click on the remove all button, class is "remove-all", the action is to Clear the entire List  */
	$('.remove-all').on('click', clearAll);
	
 });

	/* click on the check box,  class is "checkbox", the action is to make a checkmark and crossout the line */
$(document).on('click', '.checkbox', crossOut);


	/* click on the remove button,  class is "remove", the action is to remove the item completely*/
$(document).on('click', '.remove', removeItem);	

$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        addItem();
    }
});