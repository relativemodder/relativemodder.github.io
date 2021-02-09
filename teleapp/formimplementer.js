$( document ).ready(function() {
    $("#sub").click(
		function(){
			sendAjaxForm('loginform', server+"user.login.php");
			return false; 
		}
	);
});
 function setCookie(name, value, props) {

props = props || {}

var exp = props.expires

if (typeof exp == "number" && exp) {

    var d = new Date()

    d.setTime(d.getTime() + exp*1000)

    exp = props.expires = d

}
function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url:     url, 
        type:     "GET", 
        dataType: "html", 
        data: $("#"+ajax_form).serialize(),  
        success: function(response) { 
        	obj = $.parseJSON(response);
		if(obj[0].state == "ok"){
                    setCookie("user_id", obj[0].user_id, {"exp": d.setTime(d.getTime() + exp*1000)});
                    setCookie("password", password, {"exp": d.setTime(d.getTime() + exp*1000)});
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
