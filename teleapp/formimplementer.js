$( document ).ready(function() {
    $("#sub").click(
		function(){
			sendAjaxForm('loginform', server+"user.login.php");
			return false; 
		}
	);
});
 
function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url:     url, 
        type:     "GET", 
        dataType: "html", 
        data: $("#"+ajax_form).serialize(),  
        success: function(response) { 
        	result = $.parseJSON(response);
        	console.log(result[0].state);
    	},
    	error: function(response) { 
            console.log("Error");
    	}
 	});
}