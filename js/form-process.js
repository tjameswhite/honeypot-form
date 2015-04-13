/* 	Pre-process form
	
	Author: Tim White
	Date: 10 Jan 2013 / 13 Apr 2015
	Ver: 1
	
	This IS NOT a full validation
    This script simply checks that required fields are filled out, 
	not that they are filled out correctly.
	Script provides instant feedback to user is a required field is empty.
	
	Required fields need to be marked with aria-required="true" attribute 
	
	Also, added ability to show State dropdown IF country selected is United States. Otherwise, no states are shown.
	This will need further work as this gets used. 
*/  

$(document).ready(function () {
    $('[aria-required=true]').blur(function () {
        if ($(this).val().length == 0) {
			if (!$(this).hasClass('error')) {
                $(this).addClass('error').after('<p class="error">Required field</p>');
			}
        } else {
			$(this).removeClass('error').next().remove();
        };
    });
    
	$('#country').change(function () {
		if ($(this).val() == 'United States') {
			$('#stateList').removeClass('hidden');
			$('#zipCode').removeClass('hidden');
		} else {
		   $('#stateList').addClass('hidden');
		   $('#zipCode').addClass('hidden');
		};
	});
    
    // Honeypot processing sample
    var honey = $('#poID');
    
    $('#go').click(function() {
        if (honey.val() != "do not change") {
            alert("Not submitting because seed value changed");
        };
    });
    
});