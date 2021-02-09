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
        	obj = $.parseJSON(response);
		if(obj[0].state == "ok"){
			$.cookie("user_id", obj[0].user_id, { expires: 7 });
			$.cookie("password", password, { expires: 7 });
                }
                else if(obj[0].state == "USER_DOESNT_EXIST"){
                    $( "errortext" ).html("This user doesn't exist!");
                }
                else if(obj[0].state == "PASSWORD_INCORRECT"){
                    $( "errortext" ).html("Password is incorrect!");
                }
                else{
                    $( "errortext" ).html("What?");
                }
        	console.log(result[0].state);
    	},
    	error: function(response) { 
            console.log("Error");
    	}
 	});
}
