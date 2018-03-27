// Gather recurring bills, income, and their dates

	// Allow enter to move to next


$("input").keypress(function(e) {
	if (e.which == 13) {
		console.log('enter');
		$(this).next().click();
		$(this).closest('.entry-row').next().find('input').focus()
	}
})

// Take input and add to table

$("a").click(function(){
	var z = $(this).prev();
	var zId = z.attr('id');
	var input = ("#" + zId + "Input");
  var x = $(z).val();
	$(input).text(x);
});


// Get bank data -- Current balance, credit card payments, purchases (Bank API? Mint API?)

// Plan upcoming expenses and manage saving goals